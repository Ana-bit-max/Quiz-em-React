import React from 'react'
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import "./Options.css";

const Options = ({ option }) => {
    const { quizState, dispatch } = useContext(QuizContext);

  return (
  <div className= {`option 
  ${quizState.answerSelected && option === answer
    ? "correct" 
    : quizState.answerSelected && option !== answer 
    ? "wrong": ""
  }`} 
  onClick={() => selectOption (options)}>
        <p>{option}</p>
    </div>
  );
  
};

export default Options;