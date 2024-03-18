import { Hono } from "hono";
import { getCookie, setCookie, deleteCookie } from "hono/cookie";
import { raw } from "hono/html";

import { SignJWT, jwtVerify } from "jose";

import { flag, secretKey, superUser } from "./settings";

type Session = {
  username?: string;
};

const encodedSecretKey = new TextEncoder().encode(secretKey);

const app = new Hono<{ Variables: Session }>();

app.use("*", async (c, next) => {
  const token = getCookie(c, "token");
  if (!token) return next();

  try {
    const { payload } = await jwtVerify<Session>(token, encodedSecretKey);
    if (!payload.username) throw new Error("missing username in token");
    c.set("username", payload.username);
  } catch (e) {
    c.status(401);
    deleteCookie(c, "token");
    return c.text("invalid token");
  }
  return next();
});

app.get("/", (c) => {
  return c.html(
    <html>
      <body>
        <h1>Hi {c.var.username ?? "annon"}!</h1>
        {c.var.username ? (
          <form method="post" action="/?action=logout">
            <button type="submit">Logout</button>
          </form>
        ) : (
          <form method="post" action="/?action=login">
            <input type="text" name="username" />
            <button type="submit">Login</button>
          </form>
        )}
        {c.var.username === superUser ? <pre>{flag}</pre> : raw(`<!-- ${superUser} flag -->`)}
      </body>
    </html>
  );
});

app.post("/", async (c) => {
  const action = c.req.query("action");
  if (action === "login") {
    const body = await c.req.parseBody();
    const username = body["username"];
    if (!username || username === superUser) return c.text("invalid username", 400);

    const jwt = await new SignJWT({ username }).setProtectedHeader({ alg: "HS256", typ: "JWT" }).sign(encodedSecretKey);
    setCookie(c, "token", jwt);
    return c.redirect("/");
  } else if (action === "logout") {
    deleteCookie(c, "token");
    return c.redirect("/");
  }
  return c.text("invalid action", 404);
});

export default app;
