import axios from 'axios';
import { errorInterceptor, responseInterceptor } from './interceptors';


const Api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('KEY')}`
  }
});

Api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error),
);

export { Api };
