import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://url-shortener.bananz.tech/api/',
  timeout: 10000,
});
