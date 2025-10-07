import axios from 'axios'

const API = axios.create({
    baseURL: "http://127.0.0.1:8000/crud/",
});

export const getEmployees = () => API.get("Employee/")
export const getEmployee = (id) => API.get(`Employee/${id}/`)
export const createEmployee = (data) => API.post("Employee/", data)
export const updateEmployee = (id, data) => API.put(`Employee/${id}/`, data)
export const deleteEmployee = (id) => API.delete(`Employee/${id}/`)
