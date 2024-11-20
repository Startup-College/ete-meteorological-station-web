import axios from "axios";

const server = axios.create({
  baseURL: "http://localhost:3333/api/v1/",
});

export default server;
