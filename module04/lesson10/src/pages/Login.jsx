import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from "../context/AuthContext";
import TitleElement from "../components/Title";
import InputElement from "../components/Input";
import InputContainerElement from "../components/InputContainer";
import ButtonSubmitElement from "../components/ButtonSubmit";
import FormularioElement from "../components/Formulario";
import ContainerElement from "../components/Container";
import ErrorElement from "../components/ErrorMessage";
import SucessMessageElement from "../components/SuccessMessage";


const Login = () => {
    const { isAuthenticated, toggleAuth, user_email, user_password, setUserEmail, setUserPassword } = useContext(AuthContext);

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');


    function handleSignIn(e) {
        e.preventDefault();
        
        if(email === user_email && password === user_password){
          toggleAuth();

          setEmail('');
          setPassword('');
          setError('');
          
          window.sessionStorage.setItem("user_email", user_email)
          window.sessionStorage.setItem("user_pwd", btoa(user_password));
          setTimeout(()=>{ navigate("/") }, 2000);
          
        }else{
          setError("Email e/ou senha inválidos.")
          setEmail('');
          setPassword('');
        }
    }

    useEffect(() => {
        
        if( window.sessionStorage.getItem("user_email") && window.sessionStorage.getItem("user_pwd")){
            toggleAuth();
            setUserEmail(window.sessionStorage.getItem("user_email"));
            setUserPassword(atob(window.sessionStorage.getItem("user_pwd")));
            navigate("/")
        }

    }, []);

    return (
        <ContainerElement>
            <TitleElement text="Login" />
            <FormularioElement onSubmit={handleSignIn}>
                <InputContainerElement>
                    <label htmlFor="email">E-mail</label>
                    <InputElement
                        type="text"
                        name="email"
                        placeholder="Digite seu email..."
                        value={email}
                        onChange={(e) =>{
                          setEmail(e.target.value);
                          setError(''); 
                        }}
                    />
                </InputContainerElement>

                <InputContainerElement>
                    <label htmlFor="password">Senha</label>
                    <InputElement
                        type="password"
                        name="password"
                        placeholder="********************"
                        value={password}
                        onChange={(e) =>{
                          setPassword(e.target.value);
                          setError('');
                        }}
                    />
                </InputContainerElement>

                <a href="#" onClick={() => alert("Problema é seu ;p")}>Esqueceu sua senha ?</a>
                <Link to="/Register" >Registre-se</Link>
                <ButtonSubmitElement disabled={!email || !password} text="Entrar" />
            </FormularioElement>
            {isAuthenticated && <span><SucessMessageElement text="Usuário autenticado." />Redirecionando para home...</span>}
            {error && <ErrorElement text={error} />}
        </ContainerElement>
    );
}


export default Login;