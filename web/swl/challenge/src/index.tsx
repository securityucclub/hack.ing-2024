import { Database } from "bun:sqlite";
import { Hono } from "hono";
import { raw } from "hono/html";
import { populatedb } from "./seed";
import { min_query } from "./settings";

interface Log {
  username: string;
  message: string;
}

const db = new Database("logs.DB");
populatedb(db);
const likeQuery = db.prepare("SELECT * FROM LOGS WHERE username LIKE ? ORDER BY username, created_at DESC");
const search = (query: string) => likeQuery.all(`%${query}%`) as Log[];

const app = new Hono();

app.get("/", async (c) => {
  const query = c.req.query("q");

  const validQuery = query && query.length >= min_query;

  const html = (
    <LogPage query={query}>
      {validQuery ? <ResultsList results={search(query)} /> : <p>Search must be of {min_query} or more characters</p>}
    </LogPage>
  );

  return c.html(html, 200, { "Cache-Control": "public, max-age=60, s-maxage=600" });
});

function LogPage({ children, query }: { children: JSX.Element; query: string | undefined }) {
  return (
    <html>
      <body>
        <h1>Admin logs</h1>
        <form>
          <input type="text" name="q" placeholder="query" minlength={min_query} value={query} />
          <button type="submit">Search</button>
        </form>
        {children}
      </body>
      {raw`<!-- it should be solved with one query ;) -->`}
    </html>
  );
}

function ResultsList({ results }: { results: Log[] }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody>
        {results.map((row, i) => (
          <tr>
            <td>{row.username}</td>
            <td>{row.message}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default app;
