/* eslint-env browser */

import axios from 'axios';

export const mainUrl = 'http://localhost:8000/api/v1';
const request = axios.create({
  mainUrl,
  headers: {
    'Content-Type': 'application/json',
    'x-access-token': window.localStorage.getItem('x-access-token')
  },
  credentials: 'omit'
});

request.interceptors.request.use(
  (config) => {
    config.headers['x-access-token'] = localStorage.getItem('x-access-token');
    return config;
  },
  error => Promise.reject(error)
);

export const Get = async (endpoint) => {
  try {
    const response = await request.get(`${mainUrl}${endpoint}`);
    return response.data;
  } catch (error) {
    return error.response ? error.response.data : error;
  }
};

export const Post = async (endpoint, data) => {
  try {
    const response = await request.post(`${mainUrl}${endpoint}`, data);
    return response.data;
  } catch (error) {
    return error.response ? error.response.data : error;
  }
};

export const Put = async (endpoint, data) => {
  try {
    const response = await request.put(`${mainUrl}${endpoint}`, data);
    return response.data;
  } catch (error) {
    return error.response ? error.response.data : error;
  }
};

export const Delete = async (endpoint, data) => {
  try {
    const response = await request.delete(`${mainUrl}${endpoint}`, data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
