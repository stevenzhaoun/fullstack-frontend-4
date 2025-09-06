import axios from 'axios'

const client = axios.create({
    baseURL: 'https://fullstack-backend-4-5utc.onrender.com',
});

export default client