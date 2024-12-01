import axios from "axios";

const server = axios.create({
  baseURL: import.meta.env.VITE_PRODUCTION_API,
});

export default server;
