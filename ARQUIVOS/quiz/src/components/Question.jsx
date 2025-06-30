import React, { useContext } from 'react';
import { QuizContext } from "../context/quiz";
import './Question.css';
import Option from './Options';

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];

  const onSelectOption = (option) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option },
    });
  };

  return (
    <div id="question">
      <p>
        Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
      </p>
      <h2>{currentQuestion.question}</h2>
      <div id="options-container">
        {currentQuestion.options.map((option, index) => (
          <Option
            option={option}
            key={index}
            answer={currentQuestion.answer}
            selectOption={() => onSelectOption(option)}
            hide={quizState.optionHide === option ? "hide": null }
          />
        ))}
      </div>

      {/* Botão e dica */}
      {!quizState.answerSelected && currentQuestion.tip && (
        <>
          <button onClick={() => dispatch({ type: "SHOW_TIP" })}>Dica</button>
          {quizState.help && <p className="tip">{currentQuestion.tip}</p>}
          <button onClick={() => dispatch({type: "REMOVE_OPTION"})}>
            Excluir uma</button>
        </>
      )}

      {/* Botão de continuar */}
      {quizState.answerSelected && (
        <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
          Continuar
        </button>
      )}
    </div>
  );
};

export default Question;

