import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001/api";

export const registerUser = async (userData) => {
  return axios.post(`${API_URL}/auth/register`, userData);
};

export const loginUser = async (userData) => {
  return axios.post(`${API_URL}/auth/login`, userData);
};

export const getCSV = async () => {
    return axios.get(`http://localhost:3001/csv`, { responseType: "blob" });
  };
  