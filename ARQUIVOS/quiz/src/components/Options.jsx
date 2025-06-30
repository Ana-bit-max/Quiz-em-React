import React, { useContext } from 'react';
import { QuizContext } from '../context/quiz';
import "./Options.css";

const Options = ({ option }) => {
  const [quizState, dispatch] = useContext(QuizContext);
  const question = quizState.questions[quizState.currentQuestion];
  const answer = question.answer;

  // Se você tem a lógica para esconder opção (hide), pegue do estado:
  const hide = quizState.optionToHide === option;

  // Função para selecionar a opção
  const selectOption = (selectedOption) => {
    if (quizState.answerSelected) return; // evita múltiplas seleções
    dispatch({
      type: 'CHECK_ANSWER',
      payload: { answer, option: selectedOption },
    });
  };

  return (
    <div
      className={`option
        ${quizState.answerSelected && option === answer ? 'correct' : ''}
        ${quizState.answerSelected && option !== answer ? 'wrong' : ''}
        ${hide ? 'hide' : ''}
      `}
      onClick={() => selectOption(option)}
    >
      <p>{option}</p>
    </div>
  );
};

export default Options;
