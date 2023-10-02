import { createContext, useState } from "react";
import { quizInfo } from "../Data/QuizData";
export const ContexProvider = ({ children }) => {
  const [data, myData] = useState(quizInfo.informations);

  const obj = {
    data,
    myData
  };
  return (
    <Context.Provider value={obj}>
      {children}
    </Context.Provider>
  );
};

const Context = createContext();
export default Context;
