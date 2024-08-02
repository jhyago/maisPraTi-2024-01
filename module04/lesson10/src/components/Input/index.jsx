import styled from "styled-components";

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

const InputElement = (props) => {

    return (
        <Input 
        name={props.name} 
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        />
    );
}


export default InputElement;