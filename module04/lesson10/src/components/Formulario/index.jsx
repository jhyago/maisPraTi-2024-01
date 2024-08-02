import styled from "styled-components";


const Formulario = styled.form`
    display: flex;
    align-items: flex-end;
    flex-direction: column;

    a {
     font-weight: 400;
     font-size: 16px;
     line-height: 19px;
     padding-bottom: 16px;
     color: #5C73DB;
     position: relative;
     top: -19px;
    }
`

const FormularioElement = (props) => {

    return (
        <Formulario onSubmit={props.onSubmit}>{props.children}</Formulario>
    );
}

export default FormularioElement;