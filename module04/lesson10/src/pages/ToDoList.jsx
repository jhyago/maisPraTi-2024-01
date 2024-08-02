import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import ContainerElement from "../components/Container";
import TitleElement from "../components/Title";
import InputElement from "../components/Input";
import ButtonSubmitElement from "../components/ButtonSubmit";
import ErrorElement from "../components/ErrorMessage";

const List = styled.ol`
    margin-top: 20px;
`

const Item = styled.li`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 26px;
    justify-content: space-between;
    padding-bottom: 16px;
`

const ButtonDone = styled.button`
    color: #fff;
    background-color: var(--color-primary);
    border: 1px solid var(--color-primary);
    border-radius: 12px;
    font-size: 16px;
    cursor: pointer;

    &:hover{
        background-color: var(--color-hover-button);
    }
`

const ToDoList = () => {
    const { isAuthenticated } = useContext(AuthContext);

    const navigate = useNavigate();

    const [todo, setToDo] = useState('');
    const [error, setError] = useState('');
    const [arr_todo, setArrToDo] = useState(() => window.sessionStorage.getItem("todo_list") ? JSON.parse(window.sessionStorage.getItem("todo_list")) : []);

    const generateId = () => Math.random().toString(16).slice(2);

    const handleClick = () => {
        setArrToDo([
            ...arr_todo,
            { id: generateId(), frase: todo }
        ])
        setToDo('');

    }

    useEffect(() => {
        window.sessionStorage.setItem("todo_list", JSON.stringify(arr_todo));
    }, [arr_todo])

    function handleDelete(index) {
        const newTodos = [...arr_todo]
        newTodos.splice(index, 1)
        setArrToDo(newTodos)
    }


    if (!isAuthenticated) {
        return <Navigate replace to="/Login" />;
    } else {

        return (
            <>
                <ButtonSubmitElement onClick={() => navigate("/")} text="Home" estilo={{ marginLeft: '30px', border: '2px solid #ffff' }} />
                <ContainerElement>
                    <TitleElement text="To-Do List" />
                    <InputElement
                        name="todo"
                        type="text"
                        value={todo}
                        onChange={(e) => setToDo(e.target.value)}
                        placeholder="Insert your To-Do..."
                    />
                    <ButtonSubmitElement disabled={!todo} onClick={handleClick} text="Add" />
                    <List>
                        {arr_todo ? arr_todo.map((td, index) => (
                            <Item key={td.id}>{td.frase}
                                <ButtonDone onClick={() => handleDelete(index)}>Done</ButtonDone>
                            </Item>
                        )) : <span>Nada pra mostrar aqui</span>}
                    </List>
                    {error && <ErrorElement text={error} />}
                </ContainerElement>
            </>
        )

    }
}

export default ToDoList;