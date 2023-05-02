import { AxiosRequestConfig } from 'axios';
import { IBackendAPI } from '../services/api';

export interface IAppContext {
  api: IBackendAPI;
  token?: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  callConfig: AxiosRequestConfig;
}
