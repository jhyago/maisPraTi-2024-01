import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContainerElement from "../components/Container";
import TitleElement from "../components/Title";
import FormularioElement from "../components/Formulario";
import InputContainerElement from "../components/InputContainer";
import InputElement from "../components/Input";
import ButtonSubmitElement from "../components/ButtonSubmit";
import ErrorElement from "../components/ErrorMessage";
import SucessMessageElement from "../components/SuccessMessage";
import { AuthContext } from "../context/AuthContext";

const RegisterUser = () => {
    const { setUserEmail, setUserPassword } = useContext(AuthContext);

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');
    const [isAuthenticated, setAuthenticated] = useState(false);


    function handleRegister(e) {
        e.preventDefault();
        
        if(!email.includes("@")){
         setError("Email inválido.")
          setEmail('');
          setPassword('');
          return
        }

        if(password.length < 8){
            setError("Senha com menos de 8 caracteres")
             setEmail('');
             setPassword('');
             return
        }

        
          setAuthenticated(true);
          setEmail('');
          setPassword('');
          setError('');

          setUserEmail(email);
          setUserPassword(password);
          
          setTimeout(()=>{ navigate("/Login") }, 2000);
          
    }

    return (
        <ContainerElement>
            <TitleElement text="Create Account" />
            <FormularioElement onSubmit={handleRegister}>
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

                <ButtonSubmitElement disabled={!email || !password} text="Registrar" />
            </FormularioElement>
            {isAuthenticated && <span><SucessMessageElement text="Usuário criado com sucesso." />Redirecionando para Login...</span>}
            {error && <ErrorElement text={error} />}
        </ContainerElement>
    );
}


export default RegisterUser;