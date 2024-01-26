import axios from 'axios';
import auth from './auth';

interface API_FORM {
  defaults: {
    headers: {
      Authorization: string;
    };
  };

  get: (url: string) => Promise<any>;
  post: (url: string, data: any) => Promise<any>;
  put: (url: string, data: any) => Promise<any>;
  delete: (url: string) => Promise<any>;
}

const API_FORM: API_FORM = <API_FORM>(<unknown>axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${auth.getToken()}`,
  },
}));

export default API_FORM;
