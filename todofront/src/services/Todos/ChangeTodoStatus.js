import axios from 'axios'

const ENDPOINT = 'http://localhost:3000/api/todos'

export default function changeTodoStatus(id) {
    const token = window.sessionStorage.getItem('jwt')
    return axios.put(`${ENDPOINT}/${id}`, {}, {
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