import axios from 'axios';
import { errorInterceptor, responseInterceptor } from './interceptors';

const Api = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    Autorization: `Bearer ${JSON.parse(localStorage.getItem('KEY') || '')}`
  }
});

Api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error),
);

export { Api };
