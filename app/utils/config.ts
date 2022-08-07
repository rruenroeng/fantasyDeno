import * as mod from "https://deno.land/std@0.150.0/dotenv/mod.ts";
//TODO: Learn about dotenv

import EnvironmentVariableNames from "../constants/EnvironmentVariableNames.ts";

await mod.config({
  export: true,
});

import { Config, ConfigSchema } from "@/schemas/Config.ts";

const envConfig: Config = {
  base_url:
    Deno.env.get(EnvironmentVariableNames.BASE_URL) || "https://localhost:8000",
  environment: Deno.env.get(EnvironmentVariableNames.DENO_ENV) || "",
  db: {
    database: Deno.env.get(EnvironmentVariableNames.DB_NAME) || "",
    host: Deno.env.get(EnvironmentVariableNames.DB_HOST) || "",
    username: Deno.env.get(EnvironmentVariableNames.DB_USERNAME) || "",
    password: Deno.env.get(EnvironmentVariableNames.DB_PASSWORD) || "",
    port: Number(Deno.env.get(EnvironmentVariableNames.DB_PORT) || 5432),
  },
  oauth: {
    discord: {
      client_id: Deno.env.get(EnvironmentVariableNames.DISCORD_CLIENT_ID) || "",
      client_secret:
        Deno.env.get(EnvironmentVariableNames.DISCORD_CLIENT_SECRET) || "",
    },
  },
};

const config = ConfigSchema.parse(envConfig);

export default config;
