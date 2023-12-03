import { createContext } from "react";
// import { useNavigate } from 'react-router-dom';
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


// import * as authApi from '../API/authApi';

// import usePersistedState from '../hooks/usePersistedState';

// export const AuthContext = createContext();

// export const AuthProvider = ({
//     children,
// }) => {

//     const navigate = useNavigate();

//     const [auth, setAuth] = usePersistedState('auth', {});

//     console.log(auth);

//     const loginSubmitHandler = async (values) => {

//         const result = await authApi.login(values.email, values.password);

//         setAuth(result);

//         localStorage.setItem('accessToken', result.accessToken);

//         navigate('/');    
//     };

//     const values = {
//         loginSubmitHandler,
//         // registerSubmitHandler,
//         // logoutHandler,
//         // username: auth.username || auth.email,
//         // email: auth.email,
//         // userId: auth._id,
//         // isAuthenticated: !!auth.accessToken,
//     };

//     return (
//         <AuthContext.Provider value={values}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// AuthContext.displayName = 'AuthContext';

// export default AuthContext;