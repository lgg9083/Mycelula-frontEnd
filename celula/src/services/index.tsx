import axios from "axios";

const PRODUCTION_URL =
  process.env.PRODUCTION_URL || "http://localhost:3001";

export const axiosInstance = axios.create({ baseURL: PRODUCTION_URL });
