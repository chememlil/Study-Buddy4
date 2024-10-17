import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const signup = async (data) => {
  return await axios.post(`${API_URL}/signup`, data);
};

export const login = async (data) => {
  return await axios.post(`${API_URL}/login`, data);
};

export const resetPassword = async (data) => {
  return await axios.post(`${API_URL}/reset-password`, data);
};

export const getProfile = async (token) => {
  return await axios.get(`${API_URL}/profile`, {
    headers: { Authorization: `Bearer ${token}` }
  });
};