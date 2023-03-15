import { Hono } from "https://deno.land/x/hono@v3.0.2/mod.ts";
import { cors } from "https://deno.land/x/hono@v3.0.2/middleware.ts";

import { serve } from "https://deno.land/std@0.179.0/http/server.ts";
import { bot } from "./bot.ts";
import { webhookCallback } from "./deps.deno.ts";

// const handleUpdate = webhookCallback(bot, "hono");

console.log("server is running");

const app = new Hono();

app.get("/", (c) => c.text("Hello Deno!"));

app.post("/telegram", webhookCallback(bot, "hono"));

serve(app.fetch);
