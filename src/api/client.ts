import axios from 'axios'

const client = axios.create({
    baseURL: 'http://localhost:8888',
});

export default client