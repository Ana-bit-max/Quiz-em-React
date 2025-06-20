import React from 'react'
import Quiz from "../img/quiz.svg";

import "./Welcome.css";
// Welcome.jsx

const Welcome = () => {
  return (
    <div id='Welcome'>
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão para começar</p>
        <button>Iniciar</button>
        <img src= {Quiz} alt="Inicio do Quiz" />
    </div>
  );
};

export default Welcome