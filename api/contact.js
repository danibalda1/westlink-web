// Vercel Serverless Function — Contact form → Email via Resend
export default async function handler(req, res) {
  const origin = req.headers['origin'] || ''
  const allowed = ['https://westlinksl.com', 'https://www.westlinksl.com']
  if (allowed.includes(origin) || origin.endsWith('.vercel.app')) {
    res.setHeader('Access-Control-Allow-Origin', origin)
  } else if (!origin) {
    res.setHeader('Access-Control-Allow-Origin', '*')
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { nombre, email, empresa, mensaje } = req.body || {}
  if (!nombre || !email || !mensaje) return res.status(400).json({ error: 'Faltan campos obligatorios' })
  const key = process.env.RESEND_API_KEY
  if (!key) return res.status(500).json({ error: 'No hay API key de email' })
  const empresaTexto = empresa ? ` (${empresa})` : ''
  const html = '<div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto"><div style="background:linear-gradient(135deg,#4f46e5,#7c3aed);padding:24px;border-radius:12px 12px 0 0"><h1 style="color:white;margin:0;font-size:20px">Nuevo contacto - Westlink SL</h1></div><div style="background:#f8fafc;padding:24px;border:1px solid #e2e8f0;border-radius:0 0 12px 12px"><table style="width:100%;border-collapse:collapse"><tr><td style="padding:8px 0;color:#64748b;font-size:14px;width:100px">Nombre</td><td style="padding:8px 0;font-weight:600">' + escapeHtml(nombre) + '</td></tr><tr><td style="padding:8px 0;color:#64748b;font-size:14px">Email</td><td style="padding:8px 0"><a href="mailto:' + escapeHtml(email) + '">' + escapeHtml(email) + '</a></td></tr>' + (empresa ? '<tr><td style="padding:8px 0;color:#64748b;font-size:14px">Empresa</td><td style="padding:8px 0">' + escapeHtml(empresa) + '</td></tr>' : '') + '</table><div style="margin-top:16px;padding:16px;background:white;border-radius:8px;border:1px solid #e2e8f0"><p style="margin:0;color:#334155">' + escapeHtml(mensaje) + '</p></div></div></div>'
  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + key, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: 'daniel@westlinksl.com',
        reply_to: email,
        subject: 'Contacto web - ' + nombre + empresaTexto,
        html: html
      })
    })
    const bodyText = await r.text()
    if (!r.ok) {
      return res.status(500).json({ error: 'Resend error (' + r.status + '): ' + bodyText })
    }
    return res.status(200).json({ ok: true })
  } catch (err) {
    return res.status(500).json({ error: 'Error: ' + err.message })
  }
}
function escapeHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')
}
