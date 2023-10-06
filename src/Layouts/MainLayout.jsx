import { useContext } from "react";
import ScoreBox from "../Components/FinalScoreBox/ScoreBox";
import QuizHead from "../Components/QuizHead/QuizHead";
import QuizMain from "../Components/QuizMain/QuizMain";
import QuizFooter from "../Components/QuizFooter/QuizFooter";
import Context from "../Context/Context";

const MainLayout = () => {
  const { showScore } = useContext(Context)


  return (


    <div className="quiz-box">
      {showScore ?
        <ScoreBox /> :
        <>
          <QuizHead />
          <QuizMain />
          <QuizFooter />
        </>
      }
    </div>



  );
};

export default MainLayout;
