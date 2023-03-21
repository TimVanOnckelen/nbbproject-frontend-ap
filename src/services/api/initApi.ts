import axios from "axios";
import { Configuration, EnterpriseApi } from "./generated";

const axiosInstance = axios.create({
    baseURL: 'https://some-domain.com/api/'
});

const config = new Configuration();

export const BackendApi = {
    enterprise: new EnterpriseApi(config, '', axiosInstance)
}
