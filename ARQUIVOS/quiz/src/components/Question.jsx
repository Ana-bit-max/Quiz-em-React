import React, { useContext } from 'react';
import { QuizContext } from "../context/quiz";
import './Question.css';
import Option from './Options';

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];

  return (
    <div id='question'>
      <p>
        Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
      </p>
      <h2>{currentQuestion.question}</h2>
      <div id='options-container'>
        {currentQuestion.options.map((option, index) => (
          <Option option={option} key={option} answer={currentQuestion.answer} />
        ))}
      </div>
      {quizState.answerSelected && (
        <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
          Continuar
        </button>
      )}
    </div>
  );
};

export default Question;
