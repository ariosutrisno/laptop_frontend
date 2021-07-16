import axios from 'axios';
// API URL
export const API_URL = 'https://adminproject.site';

export const API = axios.create({
  baseURL: `${API_URL}/api`,
})

export const setAuthToken = (token) => {
  API.defaults.headers.common.Authorization = `Bearer ${token}`;
  API.defaults.headers.common['Content-Type'] =
    'application/x-www-form-urlencoded';
  API.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
};
