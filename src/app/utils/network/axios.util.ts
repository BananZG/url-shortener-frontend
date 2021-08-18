import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL:
    'http://ec2-34-209-164-103.us-west-2.compute.amazonaws.com:3000/api/',
  timeout: 10000,
});
