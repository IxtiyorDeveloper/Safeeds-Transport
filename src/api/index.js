import axios from "axios";
import {getCookie} from "utils/cookie";

export const MainApi = "http://147.182.130.242:3001";

const instance = axios.create({
    baseURL: MainApi,
});

instance.interceptors.request.use(
    async (config) => {
        config.headers.Authorization = `Bearer ${getCookie()}`;
        config.headers = {
            ...config.headers,
            "Content-Type": "application/json",
        };
        return config;
    },
    (error) => Promise.reject(error.response)
);

instance.interceptors.response.use(
    (response) => response,
    (error) => {
        return Promise.reject(error.response);
    }
);

export default instance;
