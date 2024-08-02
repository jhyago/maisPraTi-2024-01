import styled from "styled-components";


const Error = styled.p`
  color: red;
  font-size: 16px;
  text-align: center;
`

const ErrorElement = (props) => {

    return (
        <Error>{props.text}</Error>
    );
}


export default ErrorElement;