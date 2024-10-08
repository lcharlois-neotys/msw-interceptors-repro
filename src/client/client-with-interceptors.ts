import axios from "axios";
import { ClientRequestInterceptor } from "@mswjs/interceptors/ClientRequest";

const interceptor = new ClientRequestInterceptor();
interceptor.apply();

interceptor.on("response", async () => {
  console.log("intercepted response");
});
interceptor.on("request", async () => {
  console.log("intercepted request");
});

const request = axios.create({
  baseURL: "http://127.0.0.1:3000",
  onUploadProgress() {},
});

const formData = new FormData();
const file = new Blob(["Hello", "world"], { type: "text/plain" });
formData.set("file", file, "doc.txt");

request
  .post("http://127.0.0.1:3000", formData)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    throw error.response.data;
  });
