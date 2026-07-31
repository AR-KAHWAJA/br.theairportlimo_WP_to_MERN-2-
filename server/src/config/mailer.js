import nodemailer from 'nodemailer'

let transporter = null

function getTransporter() {
  if (transporter) return transporter

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return null
  }

  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS }
  })

  return transporter
}

export async function sendNotificationEmail({ subject, text, html }) {
  const client = getTransporter()

  if (!client) {
    console.warn('[mailer] SMTP is not configured; skipping notification email.')
    return
  }

  const to = process.env.NOTIFY_EMAIL || process.env.SMTP_USER
  const bcc = process.env.NOTIFY_BCC || undefined

  try {
    await client.sendMail({
      from: `"BlinkRide Website" <${process.env.SMTP_USER}>`,
      to,
      bcc,
      subject,
      text,
      html
    })
  } catch (err) {
    console.error('[mailer] Failed to send notification email:', err.message)
  }
}
