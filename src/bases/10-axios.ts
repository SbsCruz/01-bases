import axios from "axios";
import type { GIFResponse } from "../interfaces/gif-response";

const apiKey = "3bDIPzUkZgjtm0E6XvT8ZLLbwFBY9coJ";

const gifApi = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs",
  params: {
    api_key: apiKey,
  },
});

export default gifApi;

// gifApi
//   .get<GIFResponse>("/random")
//   .then((resp) => console.log(resp.data.data.images.downsized_large.url))
//   .catch((err) => console.log(err));
