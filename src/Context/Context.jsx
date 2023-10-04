import { createContext, useState } from "react";
import { quizInfo } from "../Data/QuizData";
export const ContexProvider = ({ children }) => {
  const [datas, setDatas] = useState(quizInfo.informations);

  const obj = {
    datas,
    setDatas
  };
  return (
    <Context.Provider value={obj}>
      {children}
    </Context.Provider>
  );
};

const Context = createContext();
export default Context;
