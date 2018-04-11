import axios from 'axios';
import store from '../store';

const BASE_URL = '/';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 50000,
});

const getToken = ({ auth }) => auth;

api.interceptors.request.use(function (config) {
  const token = getToken(store.getState());
  if (token) {
    config.headers['Authorization'] = `JWT ${token}`;
  }
  return config;
});

export default api;
