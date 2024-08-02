import styled from "styled-components";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background: var(--color-background);
  border-radius: 15px;
  max-width: 800px;
  margin: 50px auto;
`

const ContainerElement = ({ children }) => {

  return (
    <Container>{children}</Container>
  );
}

export default ContainerElement;