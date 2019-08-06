const axios = require('axios');

export function getUserInfo({params}) {
    return axios.get('/users', {params}).then(res => {
        return res;
    })
}