import axios from 'axios'

const client = axios.create({
    baseURL: 'http://localhost:8888',
    headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInJvbGVJZCI6MSwiaWF0IjoxNzU2ODY0MTAzLCJleHAiOjE3NTY5NTA1MDN9.zIytQNQ06PPOo_JjigD8CeFtCBge1vVVef-AeiInYO0`,
    },
});

export default client