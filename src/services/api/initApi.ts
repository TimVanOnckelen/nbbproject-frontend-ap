import axios from "axios";
import { Configuration, EnterpriseApi } from "./generated";
import { TokenApi } from "./api";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL
});

const config = new Configuration();

export interface IBackendAPI {
    enterprise: EnterpriseApi
    token: TokenApi
}

export const BackendApi = {
    enterprise: new EnterpriseApi(config, '', axiosInstance),
    token: new TokenApi(config, '',axiosInstance)
}
