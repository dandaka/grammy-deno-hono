import { Hono } from "https://deno.land/x/hono/mod.ts";
import { cors } from "https://deno.land/x/hono/middleware.ts";

import { serve } from "https://deno.land/std@0.154.0/http/server.ts";
import { bot } from "./bot.ts";
import { webhookCallback } from "./deps.deno.ts";

const handleUpdate = webhookCallback(bot, "std/http");

const app = new Hono();

app.get("/", (c) => c.text("Hello Deno!"));

app.post("/telegram", () => {
  return handleUpdate(req);
});

serve(app.fetch);
