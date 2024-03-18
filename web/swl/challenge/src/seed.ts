import { faker } from "@faker-js/faker";
import Database from "bun:sqlite";
import { addedUsers, flag } from "./settings";

const randomLogWeighed: [number, () => string][] = [
  [0.4, faker.hacker.phrase],
  [0.05, faker.company.buzzPhrase],
  [0.05, faker.company.catchPhrase],
  [0.02, faker.system.filePath],
  [0.02, faker.system.fileName],
  [0.04, faker.hacker.abbreviation],
  [0.01, faker.string.binary],
  [0.01, faker.string.hexadecimal],
  [0.04, faker.finance.bitcoinAddress],
  [0.3, faker.git.commitMessage],
  [0.04, faker.person.bio],
  [0.02, faker.system.networkInterface],
];

function randomPhrase() {
  const rand = faker.number.float({ min: 0, max: 1 });
  let sum = 0;
  for (const [weight, func] of randomLogWeighed) {
    sum += weight;
    if (rand < sum) return func();
  }
  throw new Error("Unreachable");
}

export function populatedb(db: Database) {
  db.run("DROP TABLE IF EXISTS logs");
  db.run("CREATE TABLE IF NOT EXISTS logs (username text, message text, created_at datetime DEFAULT CURRENT_TIMESTAMP)");
  const createQuery = db.prepare("INSERT INTO LOGS (username, message, created_at) VALUES ($user, $msg, datetime('now'))");

  for (let i = 0; i < addedUsers.before; i++) createQuery.run({ $user: faker.internet.userName().toLowerCase(), $msg: randomPhrase() });

  createQuery.run({ $user: faker.internet.userName({ firstName: "benjamin" }).toLowerCase(), $msg: randomPhrase() });
  createQuery.run({ $user: faker.internet.userName({ firstName: "nicolas" }).toLowerCase(), $msg: randomPhrase() });
  createQuery.run({ $user: "benjamin.vicente", $msg: "it seems that we need LIKE a special query" });
  createQuery.run({ $user: "r0b1n", $msg: flag });
  createQuery.run({ $user: "nicolas.berrios", $msg: "Trynna raise $40m, pre-product, pre-idea and LIKE a lot of pre-workout" });
  createQuery.run({ $user: "0wulf", $msg: "less frequently than I would LIKE to, but I'll do what I can" });
  createQuery.run({ $user: "admin", $msg: "Search for known admin users for clues" });

  for (let i = 0; i < addedUsers.after; i++) createQuery.run({ $user: faker.internet.userName().toLowerCase(), $msg: randomPhrase() });

  createQuery.run({ $user: faker.internet.userName({ firstName: "benjamin" }).toLowerCase(), $msg: randomPhrase() });
}
