import { useContext, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import ContainerElement from "../components/Container";
import TitleElement from "../components/Title";
import InputElement from "../components/Input";
import ButtonSubmitElement from "../components/ButtonSubmit";
import ErrorElement from "../components/ErrorMessage";


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

const IpAddressFinder = () => {
  const { isAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();

  const [ip, setIp] = useState('');
  const [ipData, setIpdata] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const findIp = async () => {
    try {
      setLoading(true);
      setError('');

      const response = await axios.get(`https://ipapi.co/${ip}/json/`)

      if (response.data.error) {
        throw new Error(response.data.reason);
      }

      setIpdata(response.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching movie data: " + err.message);
      setLoading(false);
      setError(err.message);
      setIpdata(null);
    }
  }

  if (!isAuthenticated) {
    return <Navigate replace to="/Login" />;
  } else {

    return (
      <>
       <ButtonSubmitElement onClick={() => navigate("/")} text="Home" estilo={{ marginLeft: '30px'}} />
      <ContainerElement>
        <TitleElement text="Ip Address Finder"/> 
        <InputElement
          name="ip"
          type="text"
          value={ip}
          onChange={(e) => setIp(e.target.value)}
          placeholder="Enter an ip address..."
        />
        <ButtonSubmitElement onClick={findIp} disabled={!ip} text="Find Ip" />
        {ipData && (
          <ResultContainer>
            <p><strong>IP: </strong>{ipData.ip}</p>
            <p><strong>Location: </strong>{ipData.city}, {ipData.region}, {ipData.country_name} </p>
            <p><strong>ISP: </strong>{ipData.org}</p>
          </ResultContainer>
        )}
        {error && <ErrorElement text={error} />}
        {loading && <p>...</p>}
      </ContainerElement>
      </>
    )

  }
}


export default IpAddressFinder;