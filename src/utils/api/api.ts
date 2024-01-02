import axios from 'axios';

// Create a basic Axios instance with a base URL
const instance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    // You can add other headers here
  },
});