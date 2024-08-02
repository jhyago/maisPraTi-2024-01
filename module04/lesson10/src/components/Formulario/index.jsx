import styled from "styled-components";


const Formulario = styled.form`
    display: flex;
    align-items: flex-end;
    flex-direction: column;

    a {
     font-weight: 400;
     font-size: 12px;
     line-height: 19px;
     padding-bottom: 16px;
     color: var(--color-primary);
     position: relative;
     top: -19px;
     left: 10%;
    }

    a:hover{
        color: var(--color-secundary);
    }
`

const FormularioElement = (props) => {

    return (
        <Formulario onSubmit={props.onSubmit}>{props.children}</Formulario>
    );
}

export default FormularioElement;