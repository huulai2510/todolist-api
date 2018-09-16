import axios from 'axios'
import {API_URL} from '../constants/config'

const callApi = (endpoint, method = 'GET', data) => {
    return axios({
        method: method,
        url: `${API_URL}/${endpoint}`,
        data: data
    }).catch(err => console.log(err))
}

export default callApi