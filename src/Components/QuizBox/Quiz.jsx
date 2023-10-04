import React, { useContext, useState } from "react";
import "../QuizBox/Quiz.css";
import Context from "../../Context/Context";
import { nanoid } from "nanoid";
function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const { datas } = useContext(Context);
  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1)
  }
  const prevQuestion = () => {
    setCurrentQuestion(currentQuestion - 1)
  }


  return (
    <div className="quiz-box">
      <>
        <header>
          <h3>awosome quiz application</h3>
          <div className="time">
            <span>Time left</span>
            <p>60</p>
          </div>
        </header>

        <main>
          <div className="questions">
            <h4>{currentQuestion + 1}. {datas[currentQuestion].question}</h4>
          </div>
          <div className="variants">
            {datas[currentQuestion].variants.map(variant => {
              return (
                <button className="variant-btn" key={nanoid()}>
                  {variant}
                </button>
              )
            })}
          </div>
        </main>
        <footer>
          <span className="active-question-numbs"> {currentQuestion + 1} of {datas.length} Questions</span>
          <div className="next-prev-btn">
            <button className={`prev-btn ${currentQuestion <= 0 ? 'none' : 'block'}`} onClick={prevQuestion}>Prev Que</button>
            <button className={`next-btn ${currentQuestion < datas.length - 1 ? 'block' : 'none'}`} onClick={nextQuestion}>Next Que</button>

          </div>
        </footer>
      </>
    </div>
  );
}

export default Quiz;
