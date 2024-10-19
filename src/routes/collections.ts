import { Hono } from "hono";

const collectionRouter = new Hono();

// GET /collections
// Returns a JSON object with a 200 status code and a list of collections.
collectionRouter.get("/", (c) => {
  return c.json({
    code: 200,
    collections: [],
  });
});

// POST /collections
// Creates a new collection with the provided name.
collectionRouter.post("/:name", (c) => {
  return c.json(
    {
      code: 201,
      message: "Collection created",
    },
    201
  );
});

// GET /collections/:name
// Returns a JSON object with a 200 status code and the collection with the provided ID.
collectionRouter.get("/:name", (c) => {
  return c.json({
    code: 200,
    collection: {
      id: c.req.param("name"),
      name: "Collection Name",
    },
  });
});

// PUT /collections/:name
// Updates the collection with the provided name.
collectionRouter.put("/:name", (c) => {
  return c.json({
    code: 200,
    message: "Collection updated",
  });
});

// DELETE /collections/:name
// Deletes the collection with the provided name.
collectionRouter.delete("/:name", (c) => {
  return c.json({
    code: 200,
    message: "Collection deleted",
  });
});

export default collectionRouter;
