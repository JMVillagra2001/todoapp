import { createContext, useState } from "react";

const Context = createContext({})

export function AuthProvider ({ children }) {
    const [jwt, setJWT] = useState(
        () => window.sessionStorage.getItem('jwt')
    )

    return <Context.Provider value={{
        jwt,
        setJWT
    }}>
        {children}
    </Context.Provider>
}


export default Context;
