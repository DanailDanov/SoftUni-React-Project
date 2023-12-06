import { createContext } from "react";
import usePersistedState from "../hooks/usePersistedState";
export const AuthContext = createContext();


export const AuthProvider = ({
    children,
}) => {

    const [auth, setAuth] = usePersistedState('user');

    return (
        < AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};