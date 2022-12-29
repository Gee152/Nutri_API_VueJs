import axios from 'axios';

//URL: https://sujeitoprogramador.com/rn-api/?api=posts

const api = axios.create({
    baseUrl: 'https://https://sujeitoprogramador.com/rn-api/'
});

export default api;