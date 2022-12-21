import * as auth from "./auth";
import * as post from "./post";
import * as search from "./search";
import * as searchSample from "./search/sample";

export const handlers = [
  ...Object.values(auth),
  ...Object.values(post),
  ...Object.values(search),
  ...Object.values(searchSample),
];
