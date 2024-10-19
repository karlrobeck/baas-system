import { Hono } from "hono";
import { apiRouter } from "./routes/index.ts";

export const mainServer = new Hono();

mainServer.route("/api", apiRouter);

Deno.serve(mainServer.fetch);
