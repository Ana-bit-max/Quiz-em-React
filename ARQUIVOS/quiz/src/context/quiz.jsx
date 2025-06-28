import { createContext, useReducer } from "react";
import questions from '../data/questions_complete';

const STAGES = ["Start", "Category", "Playing", "End"];

const initialState = {
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
  score: 0,
  answerSelected: false,
  help: false;
};

const quizReducer = (state, action) => {
  console.log(state, action);

  switch (action.type) {
    case "CHANGE_STATE":
      return {
        ...state,
        gameStage: STAGES[1],
      };

    case "START_GAME":
      let quizQuestions = null

      state.questions.forEach((question) => {
        if (question.category === action.payload) {
          quizQuestions = question.questions
        }
      });

      return {
        ...state,
        questions: quizQuestions,
        gameStage: STAGES[2], // STAGES[2] = "Playing"
        currentQuestion: 0,
        score: 0,
        answerSelected: false,
        help: false,

      };

    case "REORDER_QUESTIONS":
      const reorderedQuestions = state.questions.sort(() => Math.random() - 0.5);
      return {
        ...state,
        questions: reorderedQuestions,
      };

    case "CHANGE_QUESTION":
      const nextQuestion = state.currentQuestion + 1;
      const hasMoreQuestions = state.questions[nextQuestion] !== undefined;

      return {
        ...state,
        currentQuestion: nextQuestion,
        gameStage: hasMoreQuestions ? state.gameStage : STAGES[3], // STAGES[3] = "End"
        answerSelected: false,
      };

    case "NEW_GAME":
      return initialState;

    case "CHECK_ANSWER":
      if (state.answerSelected) return state;

      const { answer, option } = action.payload;
      const isCorrect = answer === option;

      return {
        ...state,
        score: state.score + (isCorrect ? 1 : 0),
        answerSelected: option,
      };

      case "SHOW_TIP":
        return {
          ...state,
          help: "tip",
        }

    default:
      return state;
  }
};

// ✅ Criando e exportando o contexto
export const QuizContext = createContext();

// ✅ Criando e exportando o provider
export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState);
  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  );
};
