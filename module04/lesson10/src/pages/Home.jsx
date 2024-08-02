import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";


const SideBar = styled.nav`
    background-color: #ccc;
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
    color: black;
    padding: 100px 0;
    text-decoration: none;
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    font-size: 20px;
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    &:hover{
        background-color: #04AA6D;
        color: white;
    }

    a{
        text-decoration: none;
        color: inherit;
    }
`
const InfoUser = styled.span`
    width: 200px;
    display: block;
    font-size: 14px;
    padding: 8px;
`


const Home = () => {
    const { isAuthenticated, user_email } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate replace to="/Login" />;
    } else {
        return (
            <>
                <InfoUser>Welcome, {user_email}</InfoUser>
                <SideBar>
                    <ul>
                        <SideBarOptions>
                            <span className="material-icons">search</span>
                            <Link to="/IpAddressFinder">Ip Address Finder</Link>
                        </SideBarOptions>
                        <SideBarOptions>
                        <span className="material-icons">translate</span>
                            <Link to="/LanguageTranslator">Languagem Translator</Link>
                        </SideBarOptions>
                        <SideBarOptions>
                        <span className="material-icons">movie</span>
                            <Link to="/MovieSearchEngine">Movie Search</Link>
                        </SideBarOptions>
                        <SideBarOptions>
                        <span className="material-icons">qr_code</span>
                            <Link to="/QRCodeGenerator">QRCode Generator</Link>
                        </SideBarOptions>
                        <SideBarOptions>
                        <span className="material-icons">quiz</span>
                            <Link to="/QuizApp">Quiz</Link>
                        </SideBarOptions>
                        <SideBarOptions>
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