import { useContext, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import styled from 'styled-components'
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

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
const QRCodeGenerator = () => {
  const { isAuthenticated } = useContext(AuthContext);

  const [url, setUrl] = useState("");

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
    <Container>
        <Title>Enter text</Title>
          <Input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter a text..."
            />
        <div>{url && qrcode}</div>
    </Container>
  );
  
}

};

export default QRCodeGenerator;