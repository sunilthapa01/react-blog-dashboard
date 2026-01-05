import axios from 'axios';

const API_URL = 'http://localhost:3000/users/';

export const GetUser = async () => {
    return axios.get(API_URL)
}