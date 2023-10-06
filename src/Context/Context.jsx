import { createContext, useState } from "react";
import { quizInfo } from "../Data/QuizData";

export const ContexProvider = ({ children }) => {
  const [datas, setDatas] = useState(quizInfo.informations);
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)

  const resultQue = () => {
    setShowScore(!showScore)

  }
  const obj = {
    datas,
    setDatas,
    currentQuestion,
    setCurrentQuestion,
    score, setScore, resultQue, showScore, setShowScore
  };
  return (
    <Context.Provider value={obj}>
      {children}
    </Context.Provider>
  );
};

const Context = createContext();
export default Context;
