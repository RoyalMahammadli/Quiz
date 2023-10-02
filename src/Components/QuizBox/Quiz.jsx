import React, { useContext } from "react";
import "../QuizBox/Quiz.css";
import Context from "../../Context/Context";
function Quiz() {
  const { data } = useContext(Context);
  return (
    <div className="box">
      {console.log(data)}
    </div>
  );
}

export default Quiz;
