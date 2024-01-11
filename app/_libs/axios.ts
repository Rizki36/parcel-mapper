import { ENV } from "@/_constants";
import axios from "axios";
import qs from "qs";
const axiosInstance = axios.create({
  baseURL: ENV.BASE_URL,
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: "repeat" }),
});

export default axiosInstance;
