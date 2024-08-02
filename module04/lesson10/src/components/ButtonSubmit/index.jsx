import styled from "styled-components";


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


const ButtonSubmitElement = (props) => {
    return (
        <Button onClick={props.onClick} disabled={props.disabled} style={props.estilo}>{props.text}</Button>
    );
}

export default ButtonSubmitElement;