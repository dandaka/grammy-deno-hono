import { Bot } from "./deps.deno.ts";
import "https://deno.land/std@0.179.0/dotenv/load.ts";

export const bot = new Bot(Deno.env.get("BOT_TOKEN") || "");

bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));

bot.command("ping", (ctx) => ctx.reply(`Pong! ${new Date()} ${Date.now()}`));
