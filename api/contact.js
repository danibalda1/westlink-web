// ── Rate limiting simple (5 emails/min por IP) ──
const rateMap = new Map()
function checkRate(ip, maxPerMin = 5) {
  const now = Date.now()
  const entry = rateMap.get(ip)
  if (!entry || now - entry.windowStart > 60000) {
    rateMap.set(ip, { count: 1, windowStart: now })
    return true
  }
  if (entry.count >= maxPerMin) return false
  entry.count++
  return true
}

// Vercel Serverless Function — Contact form → Email via Resend
export default async function handler(req, res) {
  const origin = req.headers['origin'] || ''

  // CORS — solo dominios propios
  const allowed = ['https://westlinksl.com', 'https://www.westlinksl.com', 'https://westlink-web.vercel.app']
  if (allowed.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin)
    res.setHeader('Vary', 'Origin')
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  // Check rate limit
  const ip = req.headers['x-forwarded-for'] || 'unknown'
  if (!checkRate(ip)) {
    return res.status(429).json({ error: 'Demasiadas solicitudes. Espera un minuto.' })
  }

  const { nombre, email, empresa, mensaje, telefono, origen } = req.body || {}

  // ── Lead magnet: no requiere mensaje ──
  const esLeadMagnet = origen === 'lead-magnet-plan-go'
  if (!nombre || !email) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' })
  }
  if (!esLeadMagnet && !mensaje) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' })
  }

  // Validar formato de email básico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Email no válido' })
  }

  // Limitar longitud de campos (prevenir abuso)
  if (nombre.length > 100 || email.length > 200 || (mensaje && mensaje.length > 5000)) {
    return res.status(400).json({ error: 'Datos demasiado largos' })
  }

  // Sanitizar API key (por si tiene saltos de línea)
  const key = (process.env.RESEND_API_KEY || '').split('\n')[0].trim()
  if (!key) {
    console.error('No RESEND_API_KEY configured')
    return res.status(500).json({ error: 'No hay API key de email' })
  }

  const empresaTexto = empresa ? ` (${empresa})` : ''
  const telefonoTexto = telefono ? `<tr><td style="padding:6px 0;color:#64748b;font-size:13px">Teléfono</td><td style="padding:6px 0;font-weight:600;font-size:14px;color:#1e293b">${escHtml(telefono)}</td></tr>` : ''

  const titulo = esLeadMagnet ? '📥 Lead magnet — Guía 10h/mes' : '🆕 Contacto web'
  const asunto = esLeadMagnet
    ? `📥 Lead: ${nombre}${empresaTexto} quiere la guía`
    : `🆕 Contacto web - ${nombre}${empresaTexto}`

  const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;font-family:Inter,-apple-system,sans-serif;background:#f8fafc">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:24px auto;background:white;border-radius:16px;overflow:hidden;border:1px solid #e2e8f0">
    <tr>
      <td style="background:linear-gradient(135deg,#4f46e5,#7c3aed);padding:28px 32px">
        <h1 style="color:white;margin:0;font-size:20px;font-weight:700">${titulo}</h1>
        <p style="color:#c4b5fd;margin:4px 0 0;font-size:14px">Westlink SL — westlinksl.com</p>
      </td>
    </tr>
    <tr>
      <td style="padding:24px 32px">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding:6px 0;color:#64748b;font-size:13px;width:80px">Nombre</td>
            <td style="padding:6px 0;font-weight:600;font-size:14px;color:#1e293b">${escHtml(nombre)}</td>
          </tr>
          <tr>
            <td style="padding:6px 0;color:#64748b;font-size:13px">Email</td>
            <td style="padding:6px 0;font-size:14px"><a href="mailto:${escHtml(email)}" style="color:#4f46e5">${escHtml(email)}</a></td>
          </tr>
          ${empresa ? `<tr><td style="padding:6px 0;color:#64748b;font-size:13px">Empresa</td><td style="padding:6px 0;font-weight:600;font-size:14px;color:#1e293b">${escHtml(empresa)}</td></tr>` : ''}
          ${telefonoTexto}
          <tr>
            <td style="padding:6px 0;color:#64748b;font-size:13px">Fecha</td>
            <td style="padding:6px 0;font-size:14px;color:#64748b">${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })}</td>
          </tr>
        </table>
          ${esLeadMagnet ? `<div style="margin-top:16px;padding:16px;background:#f0fdf4;border-radius:8px;border:1px solid #bbf7d0">
            <p style="margin:0;color:#166534;font-size:14px;font-weight:600">🎯 Quiere la guía «Cómo ahorrar 10h/mes»</p>
            <p style="margin:4px 0 0;color:#15803d;font-size:13px">Enviarle el PDF de la guía y hacer seguimiento comercial.</p>
          </div>`
          : `<div style="margin-top:16px;padding:16px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0">
            <p style="margin:0;color:#475569;font-size:14px;line-height:1.6;white-space:pre-wrap">${escHtml(mensaje)}</p>
          </div>`}
      </td>
    </tr>
    <tr>
      <td style="padding:16px 32px;border-top:1px solid #e2e8f0;font-size:11px;color:#94a3b8">
        Enviado desde westlinksl.com
      </td>
    </tr>
  </table>
</body>
</html>`

  try {
    const resendResp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Westlink Web <onboarding@resend.dev>',
        to: 'daniel@westlinksl.com',
        reply_to: email,
        subject: asunto,
        html,
        text: `${titulo}\n\nNombre: ${nombre}\nEmail: ${email}${empresa ? `\nEmpresa: ${empresa}` : ''}${telefono ? `\nTeléfono: ${telefono}` : ''}${esLeadMagnet ? '\nTipo: Lead magnet (guía 10h/mes)' : `\nMensaje: ${mensaje}`}`,
      }),
    })

    const bodyText = await resendResp.text()

    if (!resendResp.ok) {
      console.error(`Resend error (${resendResp.status}): ${bodyText}`)
      return res.status(500).json({ error: 'Error al enviar el email. Inténtalo más tarde.' })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return res.status(500).json({ error: 'Error interno del servidor' })
  }
}

function escHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}
