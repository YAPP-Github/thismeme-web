import { rest } from "msw";

export const getSearchSample = rest.get("/search/12", (req, res, ctx) => {
  return res(
    ctx.json({
      tags: [],
    }),
  );
});
