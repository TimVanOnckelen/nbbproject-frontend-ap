import axios from 'axios';
import { Configuration, EnterpriseApi } from './generated';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

const config = new Configuration();

export interface IBackendAPI {
  enterprise: EnterpriseApi;
}

export const BackendApi = {
  enterprise: new EnterpriseApi(config, '', axiosInstance),
};
