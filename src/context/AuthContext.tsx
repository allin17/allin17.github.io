import React, {createContext, ReactNode, useEffect, useReducer} from "react";
import AuthReducer from "./AuthReducer";

interface Props {
    children?: ReactNode
    // any props that come into the component
}

interface Interface {
    currentUser: any
}


const initialState: any = {
    currentUser: JSON.parse(localStorage.getItem("user")! || '{}')
}

export const AuthContext = createContext(initialState)

export const AuthContextProvider = ({children} :Props) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState)

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.currentUser));
    }, [state.currentUser]);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}
