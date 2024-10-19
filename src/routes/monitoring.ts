import { Hono } from "hono";
import type { GlobalAttributes } from "./index.ts";

const monitorRouter = new Hono();

// GET /monitoring/health
// Returns a JSON object with a 200 status code and a message indicating that the server is healthy.
monitorRouter.get("/health", (c) => {
  return c.json({
    code: 200,
    message: "Server is healthy",
  });
});

export default monitorRouter;
