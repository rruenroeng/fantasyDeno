import { Database, PostgresConnector } from "https://deno.land/x/denodb/mod.ts";
import { PostgresClient } from "denodb/deps";

const connector = new PostgresConnector({
  database: "my-database",
  host: "url-to-db.com",
  username: "username",
  password: "password",
  port: 5432, // optional
});
const db = new Database(connector);
