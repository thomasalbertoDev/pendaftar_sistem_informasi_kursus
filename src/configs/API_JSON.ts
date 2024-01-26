import axios from 'axios';
import auth from './auth';

interface API_JSON {
  defaults: {
    headers: {
      Authorization: string;
    };
  };

  get: (url: string) => Promise<any>;
  post: (url: string, data: any) => Promise<any>;
  put: (url: string, data?: any) => Promise<any>;
  delete: (url: string) => Promise<any>;
}

const API_JSON: API_JSON = <API_JSON>(<unknown>axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${auth.getToken()}`,
  },
}));

export default API_JSON;
