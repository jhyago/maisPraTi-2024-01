import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom'
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
    const { isAuthenticated, toggleAuth, setUserEmail } = useContext(AuthContext);

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');


    function handleSignIn(e) {
        e.preventDefault();
        
        if(email === "paivaseven@gmail.com" && password === "12345678"){
          toggleAuth();

          setEmail('');
          setPassword('');
          setError('');

          setUserEmail(email);
          
          setTimeout(()=>{ navigate("/") }, 2000);
          
        }else{
          setError("Email e/ou senha inválidos.")
          setEmail('');
          setPassword('');
        }
    }

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

                <ButtonSubmitElement disabled={!email || !password} text="Entrar" />
            </FormularioElement>
            {isAuthenticated && <span><SucessMessageElement text="Usuário autenticado." />Redirecionando para home...</span>}
            {error && <ErrorElement text={error} />}
        </ContainerElement>
    );
}


export default Login;