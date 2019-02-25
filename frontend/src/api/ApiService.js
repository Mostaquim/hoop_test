import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class ApiService {
    getAddress(){
        const url = `${API_URL}/api/address`;
        return axios.get(url).then(response => response.data);
    }

    createActivity(data){
        const url = `${API_URL}/api/activity/`;
        return axios.post(url,data);
    }
    getActivities(){
        const url = `${API_URL}/api/activity/`;
        return axios.get(url).then(response => response.data);
    }

}
