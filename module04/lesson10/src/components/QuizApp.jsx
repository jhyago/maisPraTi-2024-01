import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  margin: 100px auto;
`

const Title = styled.h2`
  color: #333;
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
`

const Pergunta = styled.p`
  margin: 16px;
  font-size: 16px;
  text-align: center;
`

const Opcoes = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 200px;

    label{
        padding: 5px
    }

`

const Button = styled.button`
  padding: 12px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  position: sticky;
  left: 100%;

  &:hover {
    background-color: #0056b3;
  }
`

const Score = styled.p`
    position: sticky;
    right: 100%;
`

const CustomError = styled.p`
    color: red;
`

const QuizApp = () => {
    const { isAuthenticated } = useContext(AuthContext);

    const [quiz, setQuiz] = useState(null);
    const [marcado, setMarcado] = useState('');
    const [pontos, setPontos] = useState(0);
    const [error, setError] = useState('');

    const newQuiz = async () => {
        try {
            const response = await axios.get(`https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple&encode=base64`);

            console.log(response.data);
            if(response.data.response_code == 0){
                setQuiz(response.data.results[0])
                setError('');
            }

        } catch (err) {
            console.error("Error fetching quiz data:", err);
            setError(err.message);
        }
    }

    useEffect(() => {
        newQuiz();
    }, []);

    const validate = () =>{
        console.log(marcado);
        console.log(atob(quiz.correct_answer));
        if(marcado == atob(quiz.correct_answer)){
            setPontos(pontos+1);
            alert("Correct Answer :D");
        }else{
            alert("Wrong Answer! :(");
        }

        newQuiz()
        document.querySelector("input[type='radio']:checked").checked = false
    }

    if (!isAuthenticated) {
        return <Navigate replace to="/Login" />;
    } else {
        return (
                <Container>
                <Score>Score: {pontos}</Score>
                <Title>
                    Quiz App
                </Title>
                <Pergunta>
                    {quiz ? atob(quiz.question) : "Loading..."}
                </Pergunta>
                <Opcoes>
                    <div>
                        <input type="radio" onChange={(e) => setMarcado(e.target.value)} id="opt1" name="opcao" value={quiz ? atob(quiz.incorrect_answers[0]) : ""} />
                        <label htmlFor="opt1">{quiz ? atob(quiz.incorrect_answers[0]) : "Loading..."}</label>
                    </div>

                    <div>
                        <input type="radio" onChange={(e) => setMarcado(e.target.value)} id="opt2" name="opcao" value={quiz ? atob(quiz.incorrect_answers[1]) : ""} />
                        <label htmlFor="opt2">{quiz ? atob(quiz.incorrect_answers[1]) : "Loading..." }</label>
                    </div>

                    <div>
                        <input type="radio" onChange={(e) => setMarcado(e.target.value)} id="opt3" name="opcao" value={quiz ? atob(quiz.incorrect_answers[2]) : ""} />
                        <label htmlFor="opt3">{quiz ? atob(quiz.incorrect_answers[2]) : "Loading..."}</label>
                    </div>

                    <div>
                        <input type="radio" onChange={(e) => setMarcado(e.target.value)} id="opt4" name="opcao" value={quiz ? atob(quiz.correct_answer) : ""} />
                        <label htmlFor="opt4">{quiz ? atob(quiz.correct_answer) : "Loading..."}</label>
                    </div>
                </Opcoes>
                <Button onClick={validate}>Submit</Button>
                {error && <CustomError>{error}</CustomError>}
            </Container>
            
        )

    }
}


export default QuizApp;