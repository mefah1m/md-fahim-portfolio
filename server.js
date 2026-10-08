const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const contactHandler = require("./lib/contact-handler");

function loadLocalEnvironment() {
  const envPath = path.join(__dirname, ".env");
  let contents;
  try {
    contents = fs.readFileSync(envPath, "utf8");
  } catch (error) {
    if (error.code === "ENOENT") {
      return;
    }
    throw error;
  }

  for (const line of contents.split(/\r?\n/)) {
    const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*?)\s*$/);
    if (!match || Object.hasOwn(process.env, match[1])) {
      continue;
    }
    const value = match[2].replace(/^(['"])(.*)\1$/, "$2");
    process.env[match[1]] = value;
  }
}

loadLocalEnvironment();

const files = new Map([
  ["/", ["public/index.html", "text/html; charset=utf-8"]],
  ["/index.html", ["public/index.html", "text/html; charset=utf-8"]],
  ["/styles.css", ["public/styles.css", "text/css; charset=utf-8"]],
  ["/Fahim_CV_Stirling_Sports.pdf", ["public/Fahim_CV_Stirling_Sports.pdf", "application/pdf"]],
]);

const server = http.createServer(async (request, response) => {
  response.setHeader("X-Content-Type-Options", "nosniff");
  response.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");

  const pathname = new URL(request.url, "http://localhost").pathname;
  if (pathname === "/api/contact") {
    try {
      await contactHandler(request, response);
    } catch (error) {
      console.error("Contact endpoint failed:", error);
      if (!response.headersSent) {
        response.statusCode = 500;
        response.setHeader("Content-Type", "text/plain; charset=utf-8");
      }
      if (!response.writableEnded) {
        response.end("The contact request could not be processed.");
      }
    }
    return;
  }

  const file = files.get(pathname);
  if (!file || request.method !== "GET" && request.method !== "HEAD") {
    response.statusCode = 404;
    response.end("Not found");
    return;
  }

  const filePath = path.join(__dirname, file[0]);
  fs.readFile(filePath, (error, contents) => {
    if (error) {
      console.error(`Could not read ${file[0]}:`, error);
      response.statusCode = 500;
      response.end("The requested file could not be served.");
      return;
    }
    response.setHeader("Content-Type", file[1]);
    response.setHeader("Cache-Control", "public, max-age=3600");
    response.statusCode = 200;
    response.end(request.method === "HEAD" ? undefined : contents);
  });
});

const port = Number(process.env.PORT || 3000);
server.listen(port, () => {
  console.log(`Portfolio is running at http://localhost:${port}`);
});
