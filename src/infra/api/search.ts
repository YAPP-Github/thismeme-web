import axios from "axios";

export const getRecentSearch = (value: string) => {
  //FIX : 링크가 바뀌기 때문에 따로 axios create 하지 않음
  const link2 = `https://1fab-1-237-151-2.jp.ngrok.io/tags/search?word=${value}`;
  return axios.get(`${link2}`).then((response) => response.data);
};
