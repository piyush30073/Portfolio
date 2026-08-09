import axios from "axios";

const API = axios.create({
  baseURL: "https://portfolio-qzgp.onrender.com/api",
});

export default API;