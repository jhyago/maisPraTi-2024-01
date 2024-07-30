import { createContext, useState } from "react";

const AuthContext = createContext();


const AuthProvider = (props) => {
    const [ isAuthenticated, setAuthenticated ] = useState(false);
    const [ user_email, changeUserEmail ] = useState('');
    
    const toggleAuth = () => {
        setAuthenticated(!isAuthenticated);
    };

    const setUserEmail = (email) =>{
        changeUserEmail(email);
    }

    return (
        <>
        <AuthContext.Provider value={ {isAuthenticated, user_email, setUserEmail, toggleAuth }}>
            {props.children}
        </AuthContext.Provider>
        </>
    )
};


export {AuthContext, AuthProvider };