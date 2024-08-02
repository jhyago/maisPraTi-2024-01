import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  label {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 8px;
  }
`

const InputContainerElement = ({children}) => {

    return (
        <InputContainer>{children}</InputContainer>
    );
}


export default InputContainerElement;