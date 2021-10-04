import React, { useState } from 'react'
import UseAuth from '../../hooks/UseAuth'
import './Login.css'

export default function Login() {
    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")
    const { login, isLoading, hasError } = UseAuth()

    const handleSumbmit = (e) => {
        e.preventDefault()
        login({ Username, Password })
    }

    return (
        <form onSubmit={handleSumbmit}>
            <label>Login</label>
            <input
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
                value={Username} />
            <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                value={Password} />
            {isLoading && <strong>Loading</strong>}
            {!isLoading && hasError && <strong className="error">Credentials are invalid!</strong>}
            <button>Login</button>
        </form>

    )
}
