import { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const IPAddressFinder = () => {
    const [ip, setIp] = useState('') 
    const [ipData, setIpData] = useState(null) 
  
    const findIP = async () => {
      try {
        const response = await axios.get(`https://ipinfo.io/${ip}/json`) 
        setIpData(response.data) 
      } catch (error) {
        console.error("Error fetching IP address data:", error) 
      }
    }
  
    return (
      <Container>
        <Title>IP Address Finder</Title>
        <Input
          type="text"
          value={ip} 
          onChange={(e) => setIp(e.target.value)} 
          placeholder="Enter IP address" 
        />
        <Button onClick={findIP}>Find IP</Button> 
        {ipData && ( 
          <ResultsContainer>
            <p><strong>IP:</strong> {ipData.ip}</p>
            <p><strong>Location:</strong> {ipData.city}, {ipData.region}, {ipData.country}</p>
            <p><strong>ISP:</strong> {ipData.org}</p>
          </ResultsContainer>
        )}
      </Container>
    )
  }
  
  export default IPAddressFinder 