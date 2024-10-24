import axios from "axios";

const request = axios.create({
  baseURL: "https://ontology-be-fastapi.onrender.com",
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
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
