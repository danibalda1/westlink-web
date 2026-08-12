// Proxy serverless para Fe Diaria IA (Vercel)
// Evita exponer la API key de DeepSeek en la app
const DEEPSEEK_KEY = process.env.DEEPSEEK_API_KEY;
const DEEPSEEK_URL = process.env.DEEPSEEK_BASE_URL || 'https://api.deepseek.com';

export default async function handler(req, res) {
  // Solo POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  if (!DEEPSEEK_KEY) {
    return res.status(500).json({ error: 'API key no configurada' });
  }

  const { question, history } = req.body || {};

  if (!question || question.trim().length < 3) {
    return res.status(400).json({ error: 'Pregunta demasiado corta' });
  }

  // Límite de uso básico (anti-abuso)
  if (question.length > 500) {
    return res.status(400).json({ error: 'Pregunta demasiado larga (máx 500 caracteres)' });
  }

  try {
    const systemPrompt = `Eres "Fe Diaria", un acompañante espiritual cristiano que responde en el idioma del usuario (español por defecto).

REGLAS ESTRICTAS:
1. SOLO respondes sobre la Biblia, la fe cristiana, oraciones, vida espiritual, consejo espiritual y dudas religiosas cristianas.
2. Si la pregunta NO es de tema bíblico/espiritual (política, deportes, programación, recetas, juegos, noticias, finanzas, etc.), NO la respondas. Responde amablemente: "Soy tu acompañante espiritual, y mi misión es ayudarte con tu fe. ¿Te gustaría que hablemos de la Biblia, la oración o algo que te preocupe?"
3. Sé cercano, respetuoso y práctico. Cita versículos cuando ayude (libro capítulo:versículo).
4. Máximo 250 palabras. Si el usuario comparte una preocupación, termina con una oración corta.
5. Nunca des consejos médicos, legales o financieros; si el usuario los pide, deriva suavemente al tema espiritual.`;

    const messages = [
      { role: 'system', content: systemPrompt },
      ...(Array.isArray(history) ? history.slice(-8) : []),
      { role: 'user', content: question },
    ];

    const response = await fetch(`${DEEPSEEK_URL}/v1/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${DEEPSEEK_KEY}`,
      },
      body: JSON.stringify({
        model: 'deepseek-v4-flash',
        messages,
        max_tokens: 400,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('DeepSeek error:', response.status, err.slice(0, 200));
      return res.status(502).json({ error: 'El servicio de IA no está disponible ahora' });
    }

    const data = await response.json();
    const answer = data.choices?.[0]?.message?.content || 'Lo siento, no he podido responder. Inténtalo de nuevo.';
    return res.status(200).json({ answer });
  } catch (e) {
    console.error('Proxy error:', e.message);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}
