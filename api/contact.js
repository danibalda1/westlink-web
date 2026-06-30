// Vercel Serverless Function — Contact form → Email
// Uses RESEND_API_KEY (configurada en Vercel env)

export default async function handler(req, res) {
  // CORS
  const origin = req.headers['origin'] || ''
  const allowed = ['https://westlinksl.com', 'https://www.westlinksl.com']
  if (allowed.includes(origin) || origin.endsWith('.vercel.app')) {
    res.setHeader('Access-Control-Allow-Origin', origin)
  } else if (!origin) {
    // Allow same-origin requests (no Origin header)
    res.setHeader('Access-Control-Allow-Origin', '*')
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { nombre, email, empresa, mensaje } = req.body || {}

  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' })
  }

  const subject = `📬 Contacto web — ${nombre}${empresa ? ` (${empresa})` : ''}`

  const emailHtml = `
<div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto">
  <div style="background:linear-gradient(135deg,#4f46e5,#7c3aed);padding:24px;border-radius:12px 12px 0 0">
    <h1 style="color:white;margin:0;font-size:20px">📬 Nuevo contacto — Westlink SL</h1>
  </div>
  <div style="background:#f8fafc;padding:24px;border:1px solid #e2e8f0;border-radius:0 0 12px 12px">
    <table style="width:100%;border-collapse:collapse">
      <tr><td style="padding:8px 0;color:#64748b;font-size:14px;width:100px">Nombre</td>
          <td style="padding:8px 0;font-weight:600">${escapeHtml(nombre)}</td></tr>
      <tr><td style="padding:8px 0;color:#64748b;font-size:14px">Email</td>
          <td style="padding:8px 0"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
      ${empresa ? `<tr><td style="padding:8px 0;color:#64748b;font-size:14px">Empresa</td>
          <td style="padding:8px 0">${escapeHtml(empresa)}</td></tr>` : ''}
    </table>
    <div style="margin-top:16px;padding:16px;background:white;border-radius:8px;border:1px solid #e2e8f0">
      <p style="margin:0;color:#334155">${escapeHtml(mensaje)}</p>
    </div>
    <p style="color:#94a3b8;font-size:12px;margin-top:16px">
      Enviado desde el formulario de westlinksl.com
    </p>
  </div>
</div>`.trim()

  // ── Resend (configurado en Vercel) ──
  const resendKey = process.env.RESEND_API_KEY
  if (resendKey) {
    try {
      const r = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Westlink Web <onboarding@resend.dev>',
          to: 'daniel@westlinksl.com',
          reply_to: email,
          subject,
          html: emailHtml,
        }),
      })
      if (!r.ok) {
        const errBody = await r.text()
        console.error('Resend error:', r.status, errBody)
        return res.status(500).json({ error: 'Error al enviar: ' + errBody })
      }
      return res.status(200).json({ ok: true })
    } catch (err) {
      console.error('Resend exception:', err)
      return res.status(500).json({ error: 'Error al enviar el email' })
    }
  }

  // ── Sin configuración de email ──
  console.warn('⚠️ RESEND_API_KEY no configurada. Formulario recibido:', { nombre, email, empresa })
  return res.status(200).json({
    ok: true,
    notice: 'Form submitted. No email transport configured.',
  })
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
