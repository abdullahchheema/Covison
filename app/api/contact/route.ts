import { NextRequest, NextResponse } from 'next/server'
import { contactSchema } from '@/lib/validation'

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const result = contactSchema.safeParse(body)
  if (!result.success) {
    return NextResponse.json(
      { error: 'Validation failed', issues: result.error.issues },
      { status: 422 }
    )
  }

  const { name, email, company, budget, message } = result.data

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#111119;color:#F8FAFC;padding:32px;border-radius:12px;">
      <div style="margin-bottom:24px;padding-bottom:24px;border-bottom:1px solid rgba(255,255,255,0.1);">
        <h1 style="color:#818CF8;font-size:22px;margin:0 0 4px;">New inquiry from Covison website</h1>
        <p style="color:#64748B;font-size:13px;margin:0;">${new Date().toLocaleString('en-GB', { timeZone: 'UTC' })} UTC</p>
      </div>
      <table style="width:100%;border-collapse:collapse;">
        ${[
          ['Name', name],
          ['Email', email],
          ['Company', company],
          ['Budget', budget],
        ]
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding:10px 0;color:#64748B;font-size:13px;width:100px;vertical-align:top;">${label}</td>
            <td style="padding:10px 0;color:#F8FAFC;font-size:13px;">${value}</td>
          </tr>`
          )
          .join('')}
      </table>
      <div style="margin-top:20px;padding:20px;background:rgba(255,255,255,0.04);border-radius:8px;border:1px solid rgba(255,255,255,0.08);">
        <p style="color:#64748B;font-size:12px;margin:0 0 8px;text-transform:uppercase;letter-spacing:0.08em;">Message</p>
        <p style="color:#CBD5E1;font-size:14px;line-height:1.6;margin:0;white-space:pre-wrap;">${message}</p>
      </div>
      <div style="margin-top:24px;">
        <a href="mailto:${email}" style="display:inline-block;background:linear-gradient(135deg,#6366F1,#8B5CF6);color:white;text-decoration:none;padding:12px 24px;border-radius:8px;font-size:14px;font-weight:600;">
          Reply to ${name}
        </a>
      </div>
    </div>
  `

  if (!process.env.RESEND_API_KEY) {
    console.log('[Contact form] RESEND_API_KEY not set — logging submission instead of sending:')
    console.log({ name, email, company, budget, message })
    return NextResponse.json({ ok: true })
  }

  try {
    const { Resend } = await import('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)

    const { error } = await resend.emails.send({
      from: 'Covison Contact <noreply@covison.co>',
      to: ['saadrabbani259@gmail.com'],
      replyTo: email,
      subject: `New inquiry from ${name} at ${company}`,
      html,
    })

    if (error) {
      console.error('[Contact form] Resend error:', error)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error('[Contact form] Unexpected error:', e)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
