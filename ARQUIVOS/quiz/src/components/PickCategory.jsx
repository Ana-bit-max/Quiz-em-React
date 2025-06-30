import React, { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import './PickCategory.css';
// Importe sua imagem corretamente se estiver usando
// import CategoryImage from '../img/category.svg';

const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const categories = [...new Set(quizState.questions.map(q => q.category))];

  const chooseCategoryAndReorderQuestions = (category) => {
    dispatch({ type: "REORDER_QUESTIONS" }); 
    dispatch({ type: "START_GAME", payload: category });
  };

  return (
    <div id="category">
      <h2>Escolha uma categoria</h2>
      <p>As perguntas serão referentes a uma linguagem abaixo:</p>
      <div className="category-buttons">
        {categories.map((category) => (
          <button 
            key={category}
            onClick={() => chooseCategoryAndReorderQuestions(category)}
          >
            {category}
          </button>
        ))}
      </div>
      {/* <img src={CategoryImage} alt="Categorias do Quiz" /> */}
    </div>
  );
};

export default PickCategory;
