import { NavLink } from "react-router-dom";
import React from 'react'
import './Navbar.css'
import UseAuth from "../../hooks/UseAuth";

export default function Navbar() {
    const { isLogged, logout } = UseAuth();
    return (
        <header>
            <div className="wrap">

                <div className="start">
                    <NavLink exact to="/" activeClassName="active">Home</NavLink>
                    {isLogged && <NavLink exact to="/todos">Todos</NavLink>}
                </div>

                {!isLogged && (
                    <div className="end">
                        <NavLink exact to="/login" activeClassName="active">Login</NavLink>
                        <NavLink exact to="/register" activeClassName="active">Register</NavLink>
                    </div>
                )}

                {isLogged && (
                    <div className="end">
                        <NavLink exact to="/" onClick={logout}>Logout</NavLink>
                    </div>
                )}



            </div>
        </header>
    )
}
