import axios from "axios";

export const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "https://hrms-lite-backend-4rz9.onrender.com",
});
