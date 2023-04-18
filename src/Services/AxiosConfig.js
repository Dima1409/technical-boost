import axios from 'axios';

const BASE_URL = 'https://638e03744190defdb753c6a8.mockapi.io/';
axios.defaults.baseURL = BASE_URL;

const api = axios.create({
  baseUrl: BASE_URL,
});

export { BASE_URL, api };