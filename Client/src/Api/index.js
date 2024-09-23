import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

export const signup = (formData) => API.post("/user/signup", formData);
export const login = (formData) => API.post("/user/login", formData);
