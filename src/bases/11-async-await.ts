// con async podemos usar código asíncrono como síncrono

import { GIFResponse } from "../interfaces/gif-response";
import gifApi from "./10-axios";

export const getImage = async () => {
  try {
    const resp = await gifApi.get<GIFResponse>("/random");
    return resp.data.data.images.downsized_large.url;
  } catch (error) {
    throw "No se ha encontrado una url";
  }
};

getImage()
  .then((url) => console.log({ url }))
  .catch((err) => console.info(err));
