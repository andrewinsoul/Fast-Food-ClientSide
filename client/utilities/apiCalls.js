/* eslint-env browser */

import axios from "axios";

export const mainUrl = "https://fast-food-andy.herokuapp.com/api/v1";
export const request = axios.create({
  mainUrl,
  headers: {
    "Content-Type": "application/json",
    "x-access-token": window.localStorage.getItem("x-access-token")
  },
  credentials: "omit"
});

request.interceptors.request.use(
  config => {
    config.headers["x-access-token"] = localStorage.getItem("x-access-token");
    return config;
  },
  error => Promise.reject(error)
);

export const Get = async endpoint => {
  try {
    const response = await request.get(`${mainUrl}${endpoint}`);
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const Post = async (endpoint, data) => {
  try {
    const response = await request.post(`${mainUrl}${endpoint}`, data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
