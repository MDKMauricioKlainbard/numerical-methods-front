import axios from "axios";
import type { AxiosInstance } from "axios";

const mathAPI: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3000/',
})

export default mathAPI