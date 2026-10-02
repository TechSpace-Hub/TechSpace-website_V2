// Local mock of the TechSpace API for testing the site's forms without
// touching the real system.
//
// Usage:
//   1) npm run mock:api
//   2) VITE_COMMUNITY_API_URL=http://localhost:5050/api/v1/community \
//      VITE_LEADS_API_URL=http://localhost:5050/api/v1/leads npm run dev
//
// Mirrors the documented behavior of GET /health, POST /api/v1/community and
// POST /api/v1/leads (201/200/400 responses). Every payload is printed.
import http from "node:http";

const COMMUNITY_REQUIRED = [
  ["fullName", "full name"],
  ["email", "email"],
  ["phone", "phone"],
  ["role", "role"],
  ["location", "location"],
  ["interests", "interests"],
  ["about", "about"],
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const seenLeads = new Set();

function readBody(req) {
  return new Promise((resolve) => {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => resolve(body));
  });
}

function send(res, status, payload) {
  res.setHeader("Content-Type", "application/json");
  res.writeHead(status);
  res.end(JSON.stringify(payload));
}

const server = http.createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "content-type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  const body = await readBody(req);
  console.log(`\n=== ${req.method} ${req.url} ===`);
  if (body) console.log(body);

  let payload = {};
  try {
    payload = JSON.parse(body);
  } catch {
    payload = {};
  }

  if (req.url === "/health") {
    send(res, 200, { success: true, message: "TechSpace API is running" });
    console.log("-> 200 (health)");
    return;
  }

  if (req.url.startsWith("/api/v1/leads")) {
    const email = String(payload.email ?? "").trim();
    if (!EMAIL_RE.test(email)) {
      send(res, 400, { success: false, message: "Please provide a valid email address" });
      console.log("-> 400 (invalid email)");
      return;
    }
    if (seenLeads.has(email.toLowerCase())) {
      send(res, 200, { success: true, message: "You're already on the list." });
      console.log("-> 200 (already on list)");
      return;
    }
    seenLeads.add(email.toLowerCase());
    send(res, 201, { success: true, message: "You're on the list!" });
    console.log("-> 201 (lead created)");
    return;
  }

  if (req.url.startsWith("/api/v1/community")) {
    const missing = COMMUNITY_REQUIRED.find(([key]) => !String(payload[key] ?? "").trim());
    if (missing) {
      send(res, 400, { success: false, message: `Please provide your ${missing[1]}` });
      console.log(`-> 400 (missing: ${missing[0]})`);
      return;
    }
    send(res, 201, {
      success: true,
      message: "Thank you for connecting with TechSpace! Check your email for next steps.",
    });
    console.log("-> 201 (community created)");
    return;
  }

  send(res, 404, { success: false, message: "Not found" });
  console.log("-> 404");
});

server.listen(5050, () => {
  console.log("Mock TechSpace API running on http://localhost:5050");
  console.log("Endpoints: /health, /api/v1/community, /api/v1/leads");
  console.log("Start the dev server with:");
  console.log(
    "  VITE_COMMUNITY_API_URL=http://localhost:5050/api/v1/community VITE_LEADS_API_URL=http://localhost:5050/api/v1/leads npm run dev"
  );
});
