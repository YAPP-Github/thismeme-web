import axios from "axios";

export const axiosBasic = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
});

export const axiosSearchBasic = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SEARCH_API_URL}`,
});
