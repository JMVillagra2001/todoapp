import { useCallback, useContext, useState } from "react";
import Context from "../context/AuthContext";
import loginService from '../services/Auth/Login'
import registerService from '../services/Auth/Register'

export default function UseAuth() {
    const { jwt, setJWT } = useContext(Context)
    const [state, setState] = useState({ loading: false, error: false, registered: false })

    const login = useCallback(({ Username, Password }) => {
        setState({ loading: true, error: false })
        loginService({ Username, Password })
            .then(jwt => {
                window.sessionStorage.setItem('jwt', jwt)
                setState({ loading: false, error: false })
                setJWT(jwt)
            })
            .catch(err => {
                window.sessionStorage.removeItem('jwt')
                setState({ loading: false, error: true })
            })
    }, [setJWT])

    const register = useCallback(({ Username, Password }) => {
        setState({ loading: true, error: false })
        registerService({ Username, Password })
            .then(res => {
                setState({ loading: false, error: false, registered: true })
            })
            .catch(err => {
                setState({ loading: false, error: true })
            })
    }, [])

    const logout = useCallback(() => {
        window.sessionStorage.removeItem('jwt')
        setJWT(null)
    }, [setJWT])

    return {
        login,
        logout,
        register,
        isLogged: Boolean(jwt),
        isLoading: state.loading,
        isRegistered: state.registered,
        hasError: state.error,
    }
}
