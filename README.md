# MD Fahim Portfolio

The portfolio frontend is plain HTML and CSS. The JavaScript backend serves the site locally and handles the contact form; on Vercel, `api/contact.js` exposes the same handler as a serverless function.

## Run locally

Requires Node.js 20 or newer.

```sh
npm start
```

Then open <http://localhost:3000>.

## Configure contact email

The form sends messages through Resend to `fahimnz2005@gmail.com`. Create a Resend API key and verify a sender domain, then set these environment variables locally and in the Vercel project's Production environment:

- `RESEND_API_KEY` — secret API key from Resend
- `EMAIL_FROM` — sender address using a domain verified in Resend, for example `MD Fahim <portfolio@your-verified-domain.com>`

For local development, copy `.env.example` to `.env` and replace the example values. Do not commit `.env`. After setting the variables in Vercel, redeploy the project.

Until the email provider is configured, the form displays an explicit message and directs visitors to the direct email link.
