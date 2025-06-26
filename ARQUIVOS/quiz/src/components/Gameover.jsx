import React from 'react'
import { useContext } from 'react';
import { QuizContext } from "../context/quiz";

import Welldone from "../img/well_done.svg";

import "./Gameover.css";


const Gameover = () => {
  const {quizState, dispatch} = useContext(QuizContext);

  return (
    <div id='gameover'>
        <h2>Fim de jogo!</h2>
        <p>Pontuação: {quizState.score} 

        </p>
        <p>Você acertou {quizState.score} de {quizState.quetions.length} {""} 
          perguntas.
          </p>
        <img src={WellDone} alt="Fim do Quiz" />
        <button onClick={() => dispatch()}>Reiniciar</button>
    </div>
  );
};

export default Gameover;