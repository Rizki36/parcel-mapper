import axios from "axios";
import qs from "querystring";
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  paramsSerializer: (params) => {
    return qs.stringify(params);
  },
});

export default axiosInstance;
