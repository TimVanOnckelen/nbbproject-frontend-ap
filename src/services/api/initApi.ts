import axios from "axios";
import { Configuration, EnterpriseApi } from "./generated";

const axiosInstance = axios.create({
    baseURL: 'https://localhost:44378/'
});

const config = new Configuration();

export const BackendApi = {
    enterprise: new EnterpriseApi(config, '', axiosInstance)
}
