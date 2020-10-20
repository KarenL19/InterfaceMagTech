import axios from 'axios';

const api = axios.create({
  baseURL: 'https://magtech-server.azurewebsites.net/api/v1',
});

export default api;
