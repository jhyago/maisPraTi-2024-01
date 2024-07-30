import { useContext, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

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

const ResultContainer = styled.div`
  display: grid;
  text-align: center;
  margin-top: 20px;
  overflow-y: auto;

  p {
    font-size: 14px;
    color: #555;
  }
`

const CustomError = styled.p`
    color: red;
`

const IpAddressFinder = () => {
  const { isAuthenticated } = useContext(AuthContext);

  const [ip, setIp] = useState('');
  const [ipData, setIpdata] = useState(null);
  const [error, setError] = useState('');

  const findIp = async () => {
    try {
      const response = await axios.get(`https://ipapi.co/${ip}/json/`)

      if (response.data.error) {
        throw new Error(response.data.reason);
      }

      setIpdata(response.data);
      setError('');
    } catch (err) {
      console.error("Error fetching movie data: " + err.message);
      setError(err.message);
      setIpdata(null);
    }
  }

  if (!isAuthenticated) {
    return <Navigate replace to="/Login" />;
  } else {

    return (
      <Container>
        <Title>Ip Address Finder</Title>
        <Input
          type="text"
          value={ip}
          onChange={(e) => setIp(e.target.value)}
          placeholder="Enter an ip address..."
        />
        <Button onClick={findIp} disabled={!ip}>
          Find Ip
        </Button>
        {ipData && (
          <ResultContainer>
            <p><strong>IP: </strong>{ipData.ip}</p>
            <p><strong>Location: </strong>{ipData.city}, {ipData.region}, {ipData.country_name} </p>
            <p><strong>ISP: </strong>{ipData.org}</p>
          </ResultContainer>
        )}
        {error && <CustomError>{error}</CustomError>}
      </Container>
    )

  }
}


export default IpAddressFinder;