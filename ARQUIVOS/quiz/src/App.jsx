// react, componentes, estáticos 
import { useContext, useEffect } from 'react';
import { QuizContext } from './context/quiz';

import Welcome from './components/Welcome';
import Question from './components/Question';


import './App.css'


function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect (() => {
    dispatch({ type: "REORDER_QUESTIONS" });
  }, [])

 import React, { useContext } from 'react';
import { QuizContext } from './context/quiz';

import GameOver from './components/Gameover';
import Welcome from './components/Welcome';
import Question from './components/Question';

import './App.css';

function App() {
  const [quizState] = useContext(QuizContext);

  useEffect(() => {
    dispatch({ type: "REORDER_QUESTIONS" });
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver/>}
    </div>
  );
}

export default App;


