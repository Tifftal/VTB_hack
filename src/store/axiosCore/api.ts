import axios from "axios";
import { serverURI } from "./config";

const api = axios.create({
  baseURL: serverURI,
  withCredentials: true,
});

api.interceptors.request.use((req) => {
  return {
    ...req,
    baseURL: serverURI,
    withCredentials: false,
  };
});

export { api };
