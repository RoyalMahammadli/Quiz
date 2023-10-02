import React from "react";
import { ContexProvider } from "../Context/Context";
import Quiz from "../Components/QuizBox/Quiz";

const MainLayout = () => {
  return (
    <div className="">
      <ContexProvider>
        <Quiz />
      </ContexProvider>
    </div>
  );
};

export default MainLayout;
