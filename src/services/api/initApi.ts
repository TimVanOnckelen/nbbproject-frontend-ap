import axios from 'axios';
import { Configuration, EnterpriseApi } from './generated';
import { AuthenticationApi } from './api';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

const config = new Configuration({
  accessToken: '',
});

export interface IBackendAPI {
  enterprise: EnterpriseApi;
  auth: AuthenticationApi;
}

export const BackendApi = {
  enterprise: new EnterpriseApi(config, '', axiosInstance),
  auth: new AuthenticationApi(config, '', axiosInstance),
};
