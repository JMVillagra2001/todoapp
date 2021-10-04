import axios from 'axios'

const ENDPOINT = 'http://localhost:3000/api/todos'

export default function getTodos() {
    const token = window.sessionStorage.getItem('jwt')
    return axios.get(`${ENDPOINT}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
            "Access-Control-Allow-Origin": "*"
        }
    })
        .then(res => {
            if (!res.status) throw new Error('error')
            return res.data.content
        }).then(todos => {
            return todos
        }).catch(e => {
            console.log(e)
            throw new Error('Error: ' + e)
        })
}