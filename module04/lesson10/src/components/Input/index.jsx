import styled from "styled-components";

const Input = styled.input`
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid var(--color-primary);
  border-radius: 5px;
  width: 100%;
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