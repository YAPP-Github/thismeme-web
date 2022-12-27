import type { AxiosInstance } from "axios";

export class PopularTagApi {
  constructor(private api: AxiosInstance) {}

  getPopularTag = () => {
    return this.api.get(`http://localhost:3000/tags/popular`).then((response) => response.data);
  };
}
