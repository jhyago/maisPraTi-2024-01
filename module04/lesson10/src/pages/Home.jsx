import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import ButtonSubmitElement from "../components/ButtonSubmit";


const SideBar = styled.nav`
    background-color: var(--color-background);
    overflow: auto;
    margin: 8px;

    ul{
        display: grid;
        grid-template-columns: auto auto auto;
        padding: 20px;
        grid-gap: 32px;
    }
`

const SideBarOptions = styled.li`
    color: #ffff;
    padding: 100px 0;
    text-decoration: none;
    background-color: var(--color-primary);
    text-align: center;
    font-size: 20px;
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    cursor: pointer;

    &:hover{
        background-color: #ffff;
        color: black;
    }

    a{
        text-decoration: none;
        color: inherit;
    }
`
const InfoUser = styled.span`
    width: fit-content;
    display: block;
    font-size: 14px;
    padding: 8px;
    color: #ffff;
`

const Home = () => {
    const { isAuthenticated, user_email, toggleAuth, setUserEmail, setUserPassword } = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = () =>{
        window.sessionStorage.removeItem("user_email");
        window.sessionStorage.removeItem("user_pwd");
        toggleAuth();
        setUserEmail('');
        setUserPassword('')
        navigate("/Login")
    }

    if (!isAuthenticated) {
        return <Navigate replace to="/Login" />;
    } else {
        return (
            <>
                <ButtonSubmitElement onClick={logout} text="Logout" estilo={{ marginRight: '30px', border: '2px solid #ffff', position: 'sticky', left: '100%', top:'5%' }} />
                <InfoUser>Welcome, {user_email}</InfoUser>
                <SideBar>
                    <ul>
                        <SideBarOptions onClick={() => navigate("/IpAddressFinder")}>
                            <span className="material-icons">search</span>
                            <Link to="/IpAddressFinder">Ip Address Finder</Link>
                        </SideBarOptions>
                        <SideBarOptions onClick={() => navigate("/LanguageTranslator")}>
                        <span className="material-icons">translate</span>
                            <Link to="/LanguageTranslator">Languagem Translator</Link>
                        </SideBarOptions>
                        <SideBarOptions onClick={() => navigate("/MovieSearchEngine")}>
                        <span className="material-icons">movie</span>
                            <Link to="/MovieSearchEngine">Movie Search</Link>
                        </SideBarOptions>
                        <SideBarOptions onClick={() => navigate("/QRCodeGenerator")}>
                        <span className="material-icons">qr_code</span>
                            <Link to="/QRCodeGenerator">QRCode Generator</Link>
                        </SideBarOptions>
                        <SideBarOptions onClick={() => navigate("/QuizApp")}>
                        <span className="material-icons">quiz</span>
                            <Link to="/QuizApp">Quiz</Link>
                        </SideBarOptions>
                        <SideBarOptions onClick={() => navigate("/ToDoList")}>
                        <span className="material-icons">lists</span>
                            <Link to="/ToDoList">To-Do List</Link>
                        </SideBarOptions>
                    </ul>
                </SideBar>
            </>
        )
    }
}

export default Home;