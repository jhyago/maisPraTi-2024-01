import { useContext, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import styled from 'styled-components'
import { AuthContext } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import ContainerElement from "../components/Container";
import TitleElement from "../components/Title";
import InputElement from "../components/Input";
import ButtonSubmitElement from "../components/ButtonSubmit";


const QRCodeGenerator = () => {
  const { isAuthenticated } = useContext(AuthContext);

  const [url, setUrl] = useState("");

  const navigate = useNavigate();

  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={url}
      size={256}
    />
  );

  if(!isAuthenticated){
    return <Navigate replace to="/Login" />; 
}else{

  return (
    <>
    <ButtonSubmitElement onClick={() => navigate("/")} text="Home" estilo={{ marginLeft: '30px'}} />
    <ContainerElement>
        <TitleElement text="Enter text" />
          <InputElement
            name="url"
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter a text..."
            />
        <div>{url && qrcode}</div>
    </ContainerElement>
    </>
  );
  
}

};

export default QRCodeGenerator;