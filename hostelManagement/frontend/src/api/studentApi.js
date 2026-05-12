import axios from 'axios';
const API = 'http://localhost:5001/api/students';
export const getStudents = () => axios.get(API);
export const createStudent = (data) => axios.post(API, data);
export const updateStudent = (id, data) => axios.put(`${API}/${id}`, data);
export const deleteStudent = (id) => axios.delete(`${API}/${id}`);