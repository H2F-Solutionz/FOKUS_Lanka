export async function onRequestPost(context) {
  const { request, env } = context;
  const body = await request.json();
  const { name, phone, email, service, message } = body;

  /**
   * Cloudflare Pages doesn't support Node.js nodemailer.
   * You should use a transactional email API like Resend, SendGrid, or Brevo.
   * Below is a template for Resend (resend.com):
   */
  
  /*
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: 'Fokus Lanka <onboarding@resend.dev>',
      to: 'fokuslankajaf@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Email:</strong> ${email}</p><p><strong>Service:</strong> ${service}</p><p><strong>Message:</strong> ${message}</p>`
    })
  });

  if (res.ok) {
    return new Response(JSON.stringify({ message: 'Success' }), { status: 200 });
  }
  */

  // Mock success for now so the UI doesn't break
  return new Response(JSON.stringify({ message: 'Function received. Please configure an email API key in Cloudflare Dashboard.' }), { status: 200 });
}
