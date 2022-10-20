import axios from "axios";
import {getCookie} from "utils/cookie";

export const MainApi = "http://67.205.154.71/api";

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
