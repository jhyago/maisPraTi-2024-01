import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";


const SideBar = styled.nav`
    margin: 0;
    padding: 0;
    width: 200px;
    background-color: #f1f1f1;
    position: fixed;
    height: 100%;
    overflow: auto;

    ul{
        margin: 0;
        padding: 0;
    }
`

const SideBarOptions = styled.li`
    display: block;
    color: black;
    padding: 16px;
    text-decoration: none;

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
    padding-bottom: 8px;
`

const Home = () =>{
    const { isAuthenticated, user_email } = useContext(AuthContext);

    if(!isAuthenticated){
        return <Navigate replace to="/Login" />; 
    }else{
        return(
            <>
            <InfoUser>Welcome, {user_email}</InfoUser>
           <SideBar>
            <ul>
                <SideBarOptions>
                    <Link to="/IpAddressFinder">Ip Address Finder</Link>
                </SideBarOptions>
                <SideBarOptions>
                    <Link to="/LanguageTranslator">Languagem Translator</Link>
                </SideBarOptions>
                <SideBarOptions>
                    <Link to="/MovieSearchEngine">Movie Search</Link>
                </SideBarOptions>
                <SideBarOptions>
                    <Link to="/QRCodeGenerator">QRCode Generator</Link>
                </SideBarOptions>
                <SideBarOptions>
                    <Link to="/QuizApp">Quiz</Link>
                </SideBarOptions>
            </ul>
           </SideBar> 
            </>
        )
    }
}

export default Home;