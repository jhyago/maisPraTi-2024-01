import styled from "styled-components";

const Title = styled.h2`
  color: #333;
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
`

const TitleElement = ({ text }) => {

    return (
        <Title>{text}</Title>
    );
}


export default TitleElement;