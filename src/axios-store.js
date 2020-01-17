import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reactstore-692b5.firebaseio.com/'
});

export default instance;