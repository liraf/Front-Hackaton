import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3050/'
});

export default {
    Auth(data) {
        return instance.post('/auth/login', data);
    },
    SignUp(data) {
        return instance.post('/users', data);
    },
};