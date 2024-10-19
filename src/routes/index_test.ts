import { expect } from "@std/expect";
import { apiRouter } from "./index.ts";

Deno.test("Test: GET /monitoring/health", async () => {
  const res = await apiRouter.request("/monitoring/health");
  const body = await res.json();
  expect(res.status).toEqual(200);
  expect(body).toEqual({ code: 200, message: "Server is healthy" });
});

Deno.test("Test: GET /collections", async () => {
  const res = await apiRouter.request("/collection");
  const body = await res.json();
  expect(res.status).toEqual(200);
  expect(body).toEqual({ code: 200, collections: [] });
});

Deno.test("Test: POST /collections/:name", async () => {
  const res = await apiRouter.request("/collection/test", { method: "POST" });
  const body = await res.json();
  expect(res.status).toEqual(201);
  expect(body).toEqual({ code: 201, message: "Collection created" });
});

Deno.test("Test: GET /collections/:name", async () => {
  const res = await apiRouter.request("/collection/test");
  const body = await res.json();
  expect(res.status).toEqual(200);
  expect(body).toEqual({
    code: 200,
    collection: { id: "test", name: "Collection Name" },
  });
});

Deno.test("Test: PUT /collections/:name", async () => {
  const res = await apiRouter.request("/collection/test", { method: "PUT" });
  const body = await res.json();
  expect(res.status).toEqual(200);
  expect(body).toEqual({ code: 200, message: "Collection updated" });
});

Deno.test("Test: DELETE /collections/:name", async () => {
  const res = await apiRouter.request("/collection/test", { method: "DELETE" });
  const body = await res.json();
  expect(res.status).toEqual(200);
  expect(body).toEqual({ code: 200, message: "Collection deleted" });
});
