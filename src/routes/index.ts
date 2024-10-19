import { Hono } from "hono";
import monitorRouter from "./monitoring.ts";
import collectionRouter from "./collections.ts";
import { Kysely } from "kysely";

export type GlobalAttributes = {
  db: string;
};

export const apiRouter = new Hono<{
  Variables: GlobalAttributes;
}>();

apiRouter.route("/monitoring", monitorRouter);
apiRouter.route("/collection", collectionRouter);
