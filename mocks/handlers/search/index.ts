import { rest } from "msw";

export const getSearch = rest.get("/search", (req, res, ctx) => {
  return res(
    ctx.json({
      tags: [
        {
          tagId: 1,
          name: "무한도전",
          categoryName: "sample",
          viewCount: 3,
        },
        {
          tagId: 2,
          name: "무한도전전",
          categoryName: "sample",
          viewCount: 3,
        },
      ],
    }),
  );
});
