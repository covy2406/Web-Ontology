import axios from "axios";

const request = axios.create({
  baseURL: "https://1481-2405-4802-95c8-4050-2563-cb3b-128-1bfe.ngrok-free.app",
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "69420",
  },
});

// Add a request interceptor
request.interceptors.request.use(
  function (config) {
    // Do something before request is sent

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
request.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    return Promise.reject(error);
  },
);

export const setHeaderConfigAxios = (token) => {
  if (token) {
    request.defaults.headers.common["Authorization"] = token ? "Bearer " + token : "";
  } else {
    delete request.defaults.headers.common["Authorization"];
  }
};

export default request;
