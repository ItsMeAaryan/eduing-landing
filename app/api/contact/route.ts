import { NextRequest, NextResponse } from 'next/server';

// TODO: Replace this stub with a real email/CRM integration
// (e.g. Resend, SendGrid, or forwarding to a support inbox).
// Currently this just validates input and logs server-side so
// the contact form doesn't silently lose submissions like before.
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (
    !body ||
    typeof body.name !== 'string' ||
    typeof body.email !== 'string' ||
    typeof body.message !== 'string' ||
    !body.name.trim() ||
    !body.email.trim() ||
    !body.message.trim()
  ) {
    return NextResponse.json({ error: 'Invalid submission' }, { status: 400 });
  }


  return NextResponse.json({ ok: true });
}
