import axios from "axios";
const API_URL = "https://portfoliojs-4j2n.onrender.com/api";

export const fetchProjects = () =>
  axios.get(`${API_URL}/projects`).then((r) => r.data);
export const fetchSkills = () =>
  axios.get(`${API_URL}/skills`).then((r) => r.data);
export const login = (password) =>
  axios.post(`${API_URL}/auth/login`, { password }).then((r) => r.data);
export const addProject = (data, token) =>
  axios.post(`${API_URL}/projects`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
export const deleteProject = (id, token) =>
  axios.delete(`${API_URL}/projects/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
export const addSkill = (data, token) =>
  axios.post(`${API_URL}/skills`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
export const deleteSkill = (id, token) =>
  axios.delete(`${API_URL}/skills/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
