import axios from "axios";

import { axiosBasic } from "./client";

export const getRecentSearch = (value: string) => {
  return axios.get(`/search`).then((response) => response.data);
  return axiosBasic.get(`/tags/search?word=${value}`).then((response) => response.data);
};
