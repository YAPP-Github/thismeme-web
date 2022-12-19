import { axiosBasic } from "./client";

export const getRecentSearch = (value: string) => {
  return axiosBasic.get(`/tags/search?word=${value}`).then((response) => response.data);
};
