import { describe, it, expect } from 'vitest';
import { POST } from '@/app/api/contact/route';
import { NextRequest } from 'next/server';

function makeRequest(body: unknown) {
  return new NextRequest('http://localhost/api/contact', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  });
}

describe('/api/contact', () => {
  it('accepts a valid submission', async () => {
    const res = await POST(
      makeRequest({ name: 'Jane', email: 'jane@example.com', subject: 'General Inquiry', message: 'Hi!' })
    );
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.ok).toBe(true);
  });

  it('rejects a submission missing required fields', async () => {
    const res = await POST(makeRequest({ name: '', email: '', message: '' }));
    expect(res.status).toBe(400);
  });

  it('rejects malformed JSON gracefully instead of throwing', async () => {
    const req = new NextRequest('http://localhost/api/contact', {
      method: 'POST',
      body: 'not json',
      headers: { 'Content-Type': 'application/json' },
    });
    const res = await POST(req);
    expect(res.status).toBe(400);
  });
});
