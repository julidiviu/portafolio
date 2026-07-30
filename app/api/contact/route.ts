import { NextResponse } from 'next/server'

const MAX_NAME = 120
const MAX_EMAIL = 160
const MAX_SUBJECT = 180
const MAX_MESSAGE = 3000

const sanitize = (value: unknown) => (typeof value === 'string' ? value.trim() : '')

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

export async function POST(request: Request) {
  try {
    const payload = await request.json()

    const name = sanitize(payload?.name)
    const email = sanitize(payload?.email)
    const subject = sanitize(payload?.subject)
    const message = sanitize(payload?.message)
    const website = sanitize(payload?.website)

    // Honeypot for simple bot mitigation.
    if (website) {
      return NextResponse.json({ ok: true }, { status: 200 })
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    if (
      name.length > MAX_NAME ||
      email.length > MAX_EMAIL ||
      subject.length > MAX_SUBJECT ||
      message.length > MAX_MESSAGE
    ) {
      return NextResponse.json({ error: 'Field length exceeded' }, { status: 400 })
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    const resendApiKey = process.env.RESEND_API_KEY
    const toEmail = process.env.CONTACT_TO_EMAIL
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>'

    if (!resendApiKey || !toEmail) {
      return NextResponse.json({ error: 'Contact service not configured' }, { status: 503 })
    }

    const mailSubject = subject ? `[Portfolio] ${subject}` : '[Portfolio] New contact request'
    const textBody = [
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      message,
    ].join('\n')

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: mailSubject,
        text: textBody,
      }),
    })

    if (!resendResponse.ok) {
      const providerError = await resendResponse.text()
      console.error('Resend delivery failed', {
        providerStatus: resendResponse.status,
        providerError,
      })
      return NextResponse.json(
        { error: 'Email delivery failed', providerStatus: resendResponse.status },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (error) {
    console.error('Contact route unexpected error', error)
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 })
  }
}
