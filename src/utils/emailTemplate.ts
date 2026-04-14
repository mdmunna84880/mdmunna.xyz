export function sanitize(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function buildEmailHtml(name: string, email: string, subject: string, message: string): string {
  const safeName = sanitize(name);
  const safeEmail = sanitize(email);
  const safeSubject = sanitize(subject);
  const safeMessage = sanitize(message).replace(/\n/g, '<br>');

  return `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
    <body style="margin: 0; padding: 0; background-color: #F3F4F6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #F3F4F6; padding: 40px 20px;">
        <tr><td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 560px; background-color: #FFFFFF; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
            <tr><td style="background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%); padding: 32px 40px; text-align: center;">
              <h1 style="margin: 0; color: #FFFFFF; font-size: 22px; font-weight: 600;">New Portfolio Inquiry</h1>
            </td></tr>
            <tr><td style="padding: 32px 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr><td style="padding-bottom: 16px; border-bottom: 1px solid #E5E7EB;">
                  <p style="margin: 0 0 4px; font-size: 12px; color: #9CA3AF; text-transform: uppercase; letter-spacing: 0.5px;">Name</p>
                  <p style="margin: 0; font-size: 16px; color: #111827; font-weight: 500;">${safeName}</p>
                </td></tr>
                <tr><td style="padding: 16px 0; border-bottom: 1px solid #E5E7EB;">
                  <p style="margin: 0 0 4px; font-size: 12px; color: #9CA3AF; text-transform: uppercase; letter-spacing: 0.5px;">Email</p>
                  <p style="margin: 0;"><a href="mailto:${safeEmail}" style="font-size: 16px; color: #4F46E5; text-decoration: none; font-weight: 500;">${safeEmail}</a></p>
                </td></tr>
                <tr><td style="padding: 16px 0; border-bottom: 1px solid #E5E7EB;">
                  <p style="margin: 0 0 4px; font-size: 12px; color: #9CA3AF; text-transform: uppercase; letter-spacing: 0.5px;">Subject</p>
                  <p style="margin: 0; font-size: 16px; color: #111827; font-weight: 500;">${safeSubject}</p>
                </td></tr>
                <tr><td style="padding-top: 16px;">
                  <p style="margin: 0 0 8px; font-size: 12px; color: #9CA3AF; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
                  <div style="background: #F9FAFB; border-radius: 8px; padding: 20px; font-size: 15px; color: #374151; line-height: 1.7;">${safeMessage}</div>
                </td></tr>
              </table>
            </td></tr>
            <tr><td style="background-color: #F9FAFB; padding: 20px 40px; text-align: center; border-top: 1px solid #E5E7EB;">
              <p style="margin: 0; font-size: 12px; color: #9CA3AF;">Sent from <a href="https://mdmunna.xyz" style="color: #4F46E5; text-decoration: none;">mdmunna.xyz</a></p>
            </td></tr>
          </table>
        </td></tr>
      </table>
    </body>
    </html>
  `;
}
