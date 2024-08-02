import styled from "styled-components";


const Sucess = styled.p`
  color: #04AA6D;
  font-size: 16px;
  text-align: center;
`


const SucessMessageElement = (props) => {

    return (
        <Sucess>{props.text}</Sucess>
    );
}


export default SucessMessageElement;