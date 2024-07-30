import { useContext, useState } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../context/AuthContext";

// Define o estilo do container principal
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  max-width: 800px;
  margin: 50px auto;
`

// Define o estilo do título
const Title = styled.h2`
  color: #333;
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
`

// Define o estilo do campo de entrada
const Input = styled.input`
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`

const Button = styled.button`
  padding: 12px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled{
    background-color: gray
  }
`

const InputContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  label {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 8px;
  }
`

const Formulario = styled.form`
    display: flex;
    align-items: flex-end;
    flex-direction: column;

    a {
     font-weight: 400;
     font-size: 16px;
     line-height: 19px;
     padding-bottom: 16px;
     color: #5C73DB;
     position: relative;
     top: -19px;
    }
`

const Error = styled.p`
  color: red;
  font-size: 16px;
  text-align: center;
`

const Sucess = styled.p`
  color: #04AA6D;
  font-size: 16px;
  text-align: center;
`

const Login = () => {
    const { isAuthenticated, toggleAuth, setUserEmail } = useContext(AuthContext);

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [autenticado, setAutenticado] = useState(false);
    const [error, setError] = useState('');


    function handleSignIn(e) {
        e.preventDefault();
        
        if(email === "paivaseven@gmail.com" && password === "12345678"){
          toggleAuth();

          setEmail('');
          setPassword('');
          setError('');

          setUserEmail(email);
          
          setTimeout(()=>{ navigate("/") }, 5000);
          
        }else{
          setError("Email e/ou senha inválidos.")
          setEmail('');
          setPassword('');
        }
    }

    return (
        <Container>
            <Title>Login</Title>
            <Formulario onSubmit={handleSignIn}>
                <InputContainer className="inputContainer">
                    <label htmlFor="email">E-mail</label>
                    <Input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Digite seu email..."
                        value={email}
                        onChange={(e) =>{
                          setEmail(e.target.value);
                          setError(''); 
                        }}
                    />
                </InputContainer>

                <InputContainer>
                    <label htmlFor="password">Senha</label>
                    <Input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="********************"
                        value={password}
                        onChange={(e) =>{
                          setPassword(e.target.value);
                          setError('');
                        }}
                    />
                </InputContainer>

                <a href="#" onClick={() => alert("Problema é seu ;p")}>Esqueceu sua senha ?</a>

                <Button disabled={!email || !password}>
                    Entrar
                </Button>
            </Formulario>
            {isAuthenticated && <span><Sucess>Usuário autenticado.</Sucess>Redirecionando para home...</span>}
            {error && <Error>{error}</Error>}
        </Container>
    );
}


export default Login;