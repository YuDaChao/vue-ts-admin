import axios from "axios";
import axiosConfig from "./axiosConfig";

const instance = axios.create(axiosConfig);

// 请求拦截
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截
instance.interceptors.response.use(
  (response) => {
    return response.data.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
