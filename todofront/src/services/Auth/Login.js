import axios from 'axios'

const ENDPOINT = 'http://localhost:3000/api/auth'

export default function login({ Username, Password }) {
    return axios.post(`${ENDPOINT}/login`, { username: Username, password: Password }, {"Content-Type": "application/json;"})
    .then(res => {
        if (!res.status) throw new Error('error')
        return res.data.content
    }).then(jwt => {
        return jwt
    }).catch(e => {
        throw new Error('error: '+ e)  
    })

}