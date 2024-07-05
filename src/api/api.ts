import axios from "axios";
import type { AxiosInstance } from "axios";

const mathAPI: AxiosInstance = axios.create({
    baseURL: 'https://numerical-methods.onrender.com/',
})

export default mathAPI