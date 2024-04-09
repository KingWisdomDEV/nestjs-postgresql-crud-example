import axios from "axios";

console.log('import.meta.env.VITE_BASE_URL :>> ', import.meta.env.VITE_BASE_URL);
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export default axiosInstance;
