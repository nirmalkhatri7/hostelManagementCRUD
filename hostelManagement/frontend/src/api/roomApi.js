import axios from 'axios';
const API = 'http://localhost:5001/api/rooms';
export const getRooms = () => axios.get(API);
export const createRoom = (data) => axios.post(API, data);
export const updateRoom = (id, data) => axios.put(`${API}/${id}`, data);
export const deleteRoom = (id) => axios.delete(`${API}/${id}`);