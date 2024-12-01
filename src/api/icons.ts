import axios from "axios";

const icons_server = axios.create({
  baseURL: import.meta.env.VITE_ICONS_URL,
});

export default icons_server;
