import React, { useState } from 'react'
import UseAuth from '../../hooks/UseAuth'
import './Register.css'

export default function Register() {
    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")
    const { register, isLoading, hasError } = UseAuth()

    const handleSumbmit = (e) => {
        e.preventDefault()
        if(Password === ConfirmPassword) register({ Username, Password })
        else alert("Credentials are diferents!")
        
    }

    return (
        <form onSubmit={handleSumbmit}>
            <label>Register</label>
            <input
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
                value={Username} />
            <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                value={Password} />
            <input
                type="password"
                placeholder="confirm password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={ConfirmPassword} />
            <button>Register</button>
            {isLoading && <strong>Loading</strong>}
            {!isLoading && hasError && <strong className="error">Credentials are invalid!</strong>}
        </form>

    )
}
