import { axiosBasic } from "./client";

export const getPopularTag = () => {
  return axiosBasic.get("/tags/popular").then((response) => response.data);
};
