// Endpoint de IA para Westlink Gestión
// Convierte una frase en lenguaje natural en datos estructurados:
//   "presupuesto para Bodegas Riojanas, 40 metros de cable a 1,80 y 6 horas a 45"
//     → { tipo: 'presupuesto', cliente: 'Bodegas Riojanas', lineas: [...] }
//
// La clave de DeepSeek vive AQUÍ (servidor), nunca en la app.
// Si estuviera en el APK, cualquiera podría extraerla y gastarte el saldo.
//
// Seguridad: token de app + límite por IP + límite de longitud.
const DEEPSEEK_KEY = process.env.DEEPSEEK_API_KEY;
const DEEPSEEK_URL = process.env.DEEPSEEK_BASE_URL || 'https://api.deepseek.com';
const DEEPSEEK_MODEL = process.env.GESTION_MODEL || 'deepseek-flash';
// Token que solo conoce la app
const APP_TOKEN = process.env.GESTION_APP_TOKEN || 'gest-wl-2026';
const MAX_POR_IP_HORA = 60;

const ipHits = new Map();

const SYSTEM = `Eres el asistente de "Westlink Gestión", una app de gestión para instaladores
autónomos españoles (electricistas, instaladores audiovisuales, mantenimiento).

Tu trabajo: convertir UNA frase en lenguaje natural en datos estructurados para la app.

TIPOS DE DOCUMENTO:
- "presupuesto": algo que se OFRECE, todavía no hecho. Palabras: presupuesto, presupuestar, oferta, valorar, pasar precio.
- "factura": algo ya HECHO que se cobra. Palabras: factura, facturar, cobrar, emitir.
- "trabajo": un parte de trabajo o intervención. Palabras: parte, trabajo, he ido a, he estado en, avería, arreglé, instalé, reparé, visita.
- "cliente": solo se dan los datos de una persona o empresa nueva, sin trabajo ni importe.

REGLAS:
1. Responde SIEMPRE con un objeto JSON válido. NADA de texto antes ni después. NADA de markdown.
2. Español de España. Importes con punto decimal (1.80, no 1,80).
3. Si no se dice la cantidad, usa 1.
4. Si no se dice el precio de una línea, pon 0. NO TE INVENTES PRECIOS.
5. Si el cliente mencionado está en la lista de clientes que te doy, usa el nombre EXACTO de esa lista.
6. Si el cliente no está en la lista, deja "cliente" con el nombre tal cual se dijo y marca "clienteNuevo": true.
7. Si falta información para entenderlo, ponlo en "dudas" (array de textos cortos).
8. "notas" solo si la frase aporta algo extra (condiciones, plazos, detalles).

FORMATO EXACTO:
{
  "tipo": "presupuesto" | "factura" | "trabajo" | "cliente",
  "confianza": 0.0 a 1.0,
  "cliente": "nombre del cliente",
  "clienteNuevo": true | false,
  "fecha": "AAAA-MM-DD" (solo si se menciona; si dice "ayer" o "hoy" calcula la fecha),
  "descripcion": "solo para tipo trabajo: qué se hizo",
  "horas": número (solo para trabajo, si se menciona),
  "lineas": [ { "concepto": "texto", "cantidad": número, "precio": número, "descuento": número } ],
  "ivaPct": número (solo si se menciona; si no, omítelo),
  "notas": "texto",
  "dudas": ["texto"]
}

EJEMPLOS:

Entrada: "presupuesto para Bodegas Riojanas: 40 metros de cable a 1,80 y 6 horas de mano de obra a 45"
Salida: {"tipo":"presupuesto","confianza":0.95,"cliente":"Bodegas Riojanas","clienteNuevo":false,"lineas":[{"concepto":"Metros de cable","cantidad":40,"precio":1.80,"descuento":0},{"concepto":"Mano de obra","cantidad":6,"precio":45,"descuento":0}]}

Entrada: "parte de trabajo de ayer en Bar La Plaza, cambié el diferencial, 2 horas, el material 28 euros"
Salida: {"tipo":"trabajo","confianza":0.92,"cliente":"Bar La Plaza","clienteNuevo":false,"fecha":"AYER","descripcion":"Cambio del diferencial","horas":2,"lineas":[{"concepto":"Diferencial","cantidad":1,"precio":28,"descuento":0},{"concepto":"Mano de obra","cantidad":2,"precio":0,"descuento":0}],"dudas":["No has dicho el precio de la mano de obra"]}

Entrada: "factura a Juan Pérez por la instalación del sonido, 350 euros más IVA"
Salida: {"tipo":"factura","confianza":0.9,"cliente":"Juan Pérez","clienteNuevo":true,"lineas":[{"concepto":"Instalación del sonido","cantidad":1,"precio":350,"descuento":0}],"ivaPct":21}

Entrada: "apunta a Electricidad López, teléfono 649 11 22 33, está en Haro"
Salida: {"tipo":"cliente","confianza":0.93,"cliente":"Electricidad López","clienteNuevo":true,"notas":"Teléfono 649 11 22 33. Dirección: Haro","dudas":["Para guardar teléfono y dirección de verdad usa el formulario"]}`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const auth = req.headers['x-app-token'] || '';
  if (auth !== APP_TOKEN) {
    return res.status(401).json({ error: 'Acceso no autorizado' });
  }

  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'desconocida';
  const hora = Math.floor(Date.now() / 3600000);
  const clave = `${ip}:${hora}`;
  const cuenta = (ipHits.get(clave) || 0) + 1;
  ipHits.set(clave, cuenta);
  if (ipHits.size > 5000) {
    for (const k of ipHits.keys()) {
      if (parseInt(k.split(':')[1], 10) < hora - 1) ipHits.delete(k);
    }
  }
  if (cuenta > MAX_POR_IP_HORA) {
    return res.status(429).json({ error: 'Demasiadas peticiones. Prueba en un rato.' });
  }

  if (!DEEPSEEK_KEY) {
    return res.status(500).json({ error: 'IA no configurada en el servidor' });
  }

  const { texto, clientes, hoy } = req.body || {};
  if (!texto || String(texto).trim().length < 4) {
    return res.status(400).json({ error: 'Escribe algo más largo, por favor' });
  }
  if (String(texto).length > 600) {
    return res.status(400).json({ error: 'Texto demasiado largo (máx 600 caracteres)' });
  }

  const listaClientes = Array.isArray(clientes) ? clientes.slice(0, 300).join(', ') : '';
  const fechaHoy = hoy || new Date().toISOString().slice(0, 10);

  const userMsg = `CLIENTES QUE YA TIENE EN LA APP:\n${listaClientes || '(ninguno todavía)'}\n\nFECHA DE HOY: ${fechaHoy}\n\nFRASE DEL USUARIO:\n"${String(texto).trim()}"\n\nDevuelve solo el JSON.`;

  try {
    const r = await fetch(`${DEEPSEEK_URL}/v1/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${DEEPSEEK_KEY}`,
      },
      body: JSON.stringify({
        model: DEEPSEEK_MODEL,
        messages: [
          { role: 'system', content: SYSTEM },
          { role: 'user', content: userMsg },
        ],
        max_tokens: 700,
        temperature: 0.1,
      }),
    });

    if (!r.ok) {
      const err = await r.text();
      console.error('DeepSeek error:', r.status, err.slice(0, 300));
      return res.status(502).json({ error: 'La IA no está disponible ahora mismo' });
    }

    const data = await r.json();
    let bruto = data.choices?.[0]?.message?.content || '';

    // Limpiar posibles ```json ... ``` o texto alrededor
    bruto = bruto.replace(/```json/gi, '').replace(/```/g, '').trim();
    const ini = bruto.indexOf('{');
    const fin = bruto.lastIndexOf('}');
    if (ini === -1 || fin === -1) {
      console.error('Respuesta sin JSON:', bruto.slice(0, 200));
      return res.status(502).json({ error: 'No he entendido la frase. Prueba a decirlo de otra forma.' });
    }

    let datos;
    try {
      datos = JSON.parse(bruto.slice(ini, fin + 1));
    } catch (e) {
      console.error('JSON inválido:', bruto.slice(0, 300));
      return res.status(502).json({ error: 'No he entendido la frase. Prueba a decirlo de otra forma.' });
    }

    // Normalizar: 'AYER' u otros textos en fecha → resolver a fecha real
    if (datos.fecha && !/^\d{4}-\d{2}-\d{2}$/.test(String(datos.fecha))) {
      const t = String(datos.fecha).toLowerCase();
      const base = new Date(fechaHoy + 'T12:00:00');
      if (t.includes('ayer')) base.setDate(base.getDate() - 1);
      datos.fecha = base.toISOString().slice(0, 10);
    }

    return res.status(200).json({ ok: true, datos });
  } catch (e) {
    console.error('Error gestion-ia:', e.message);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}
