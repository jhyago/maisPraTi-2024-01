import { createContext, useState } from "react";

const AuthContext = createContext();


const AuthProvider = (props) => {
    const [ isAuthenticated, setAuthenticated ] = useState(false);
    const [ user_email, changeUserEmail ] = useState('');
    const [ user_password, changeUserPassword ] = useState('');
    
    const toggleAuth = () => {
        setAuthenticated(!isAuthenticated);
    };

    const setUserEmail = (email) =>{
        changeUserEmail(email);
    }

    const setUserPassword = (password) =>{
        changeUserPassword(password);
    }

    return (
        <>
        <AuthContext.Provider value={ {isAuthenticated, user_email, user_password, setUserEmail, setUserPassword, toggleAuth }}>
            {props.children}
        </AuthContext.Provider>
        </>
    )
};


export {AuthContext, AuthProvider };