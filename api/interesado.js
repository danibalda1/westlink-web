// ── Endpoint: lead hace clic en "Me interesa" desde el email ──
export default async function handler(req, res) {
  const { email, nombre } = req.query || {}

  if (!email) {
    return res.redirect(302, 'https://westlinksl.com/?error=sin-email')
  }

  // Actualizar en Airtable
  const AIRTABLE_KEY = (process.env.AIRTABLE_API_KEY || '').split('\n')[0].trim()
  const BASE = 'app0ZXZ67bcNmuLej'
  const TABLE = 'tblZFJ6ORAwIfvlpG'

  // Buscar el lead por email
  try {
    const searchResp = await fetch(
      `https://api.airtable.com/v0/${BASE}/${TABLE}?filterByFormula=${encodeURIComponent(`{Email}='${email}'`)}`,
      { headers: { 'Authorization': `Bearer ${AIRTABLE_KEY}` } }
    )
    const searchData = await searchResp.json()
    const records = searchData?.records || []

    if (records.length > 0) {
      const recordId = records[0].id
      // Actualizar estado
      await fetch(`https://api.airtable.com/v0/${BASE}/${TABLE}/${recordId}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${AIRTABLE_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: {
            Estado: 'Interesado',
            Notas: `Click en email ${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })}`,
          },
        }),
      })
    } else {
      // No encontrado, crear nuevo lead
      await fetch(`https://api.airtable.com/v0/${BASE}/${TABLE}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${AIRTABLE_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: {
            Nombre: nombre || email,
            Email: email,
            Origen: 'click-email-prospeccion',
            Estado: 'Interesado',
            Fecha: new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' }),
            Notas: 'Click en enlace del email de prospección',
          },
        }),
      })
    }
  } catch (err) {
    console.error('Tracking error:', err)
  }

  // Redirigir a la web
  res.redirect(302, 'https://westlinksl.com/')
}
