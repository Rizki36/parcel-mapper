import { ENV } from "@/_constants";
import axios from "axios";
import qs from "querystring";
const axiosInstance = axios.create({
  baseURL: ENV.BASE_URL,
  paramsSerializer: (params) => {
    return qs.stringify(params);
  },
});

export default axiosInstance;
