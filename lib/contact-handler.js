const RECIPIENT = "fahimnz2005@gmail.com";
const MAX_BODY_BYTES = 16 * 1024;

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

function sendResult(response, statusCode, title, message) {
  response.statusCode = statusCode;
  response.setHeader("Content-Type", "text/html; charset=utf-8");
  response.setHeader("Cache-Control", "no-store");
  response.end(`<!doctype html>
<html lang="en-NZ">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(title)} | MD FAHIM</title>
    <link rel="stylesheet" href="/styles.css">
  </head>
  <body>
    <main class="form-result">
      <p class="eyebrow">CONTACT</p>
      <h1>${escapeHtml(title)}</h1>
      <p>${escapeHtml(message)}</p>
      <a class="primary-button" href="/#contact">Return to portfolio</a>
    </main>
  </body>
</html>`);
}

async function readFormBody(request) {
  if (request.body && typeof request.body === "object") {
    if (Buffer.byteLength(JSON.stringify(request.body)) > MAX_BODY_BYTES) {
      throw new RangeError("Request body is too large.");
    }
    return request.body;
  }

  const chunks = [];
  let totalBytes = 0;
  for await (const chunk of request) {
    totalBytes += chunk.length;
    if (totalBytes > MAX_BODY_BYTES) {
      throw new RangeError("Request body is too large.");
    }
    chunks.push(chunk);
  }

  const body = Buffer.concat(chunks).toString("utf8");
  if (request.headers?.["content-type"]?.includes("application/json")) {
    return JSON.parse(body);
  }
  return Object.fromEntries(new URLSearchParams(body));
}

function getText(value) {
  return typeof value === "string" ? value.trim() : "";
}

async function contactHandler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return sendResult(response, 405, "Method not allowed", "Use the contact form to send a message.");
  }

  let form;
  try {
    form = await readFormBody(request);
  } catch (error) {
    const tooLarge = error instanceof RangeError;
    return sendResult(
      response,
      tooLarge ? 413 : 400,
      tooLarge ? "Message is too large" : "Invalid form submission",
      tooLarge ? "Please shorten your message and try again." : "Please check the form and try again.",
    );
  }

  if (!form || typeof form !== "object" || Array.isArray(form)) {
    return sendResult(
      response,
      400,
      "Invalid form submission",
      "Please submit the contact form and try again.",
    );
  }

  const name = getText(form.name).replace(/[\u0000-\u001f\u007f]/g, "");
  const email = getText(form.email);
  const message = getText(form.message);

  if (
    !name ||
    name.length > 100 ||
    !email ||
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    !message ||
    message.length > 5000
  ) {
    return sendResult(
      response,
      400,
      "Please check your details",
      "Enter a valid name, email address, and message, then submit the form again.",
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  if (!apiKey || !from) {
    console.error("Contact email is not configured. Set RESEND_API_KEY and EMAIL_FROM.");
    return sendResult(
      response,
      503,
      "Message service unavailable",
      "The contact form is not configured yet. Please email fahimnz2005@gmail.com directly.",
    );
  }

  let providerResponse;
  try {
    providerResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [RECIPIENT],
        reply_to: email,
        subject: `Portfolio message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    });
  } catch (error) {
    console.error("Could not reach the email provider:", error);
    return sendResult(
      response,
      502,
      "Message could not be sent",
      "The email service could not be reached. Please try again or email Fahim directly.",
    );
  }

  if (!providerResponse.ok) {
    const providerError = await providerResponse.text();
    console.error(
      `Email provider rejected the message (${providerResponse.status}):`,
      providerError.slice(0, 500),
    );
    return sendResult(
      response,
      502,
      "Message could not be sent",
      "The email service could not send your message. Please try again or email Fahim directly.",
    );
  }

  return sendResult(
    response,
    200,
    "Message sent",
    "Thanks for reaching out. Your message has been delivered.",
  );
}

module.exports = contactHandler;
