import { createContext } from "react";
import { usePersistatedState } from '../hooks/usePersistedState';

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const [auth, setAuth] = usePersistatedState('user');

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
}