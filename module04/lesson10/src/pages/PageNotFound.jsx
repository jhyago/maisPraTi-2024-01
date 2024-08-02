import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";
import ContainerElement from "../components/Container";
import TitleElement from "../components/Title";


const PageNotFound = () =>{
    const navigate = useNavigate();
    const [count, setCount ] = useState(8);

    setInterval(() =>{
        setCount(count-1)
    },1000);

    useEffect(() => {
    setTimeout(() => {
      navigate(-1)
    }, 7000)
  }, [])

    return(
        <>
        <ContainerElement>
            <TitleElement text="Are you lost, son?" />
            <TitleElement text={`Relax, I will redirect you in ${count} seconds...`} />
            <img src="https://www.powersonic.com.br/downloads/gifs/sonic_32bits/Sonic_ok.gif"></img>
            <TitleElement text="Page not found" />
        </ContainerElement>
        </>
    )
}

export default PageNotFound;