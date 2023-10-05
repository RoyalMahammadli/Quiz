import React, { useContext, useEffect, useState } from "react";
import "../QuizBox/Quiz.css";
import Context from "../../Context/Context";
import { nanoid } from "nanoid";
function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [time, setTime] = useState(200)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const { datas } = useContext(Context);
  useEffect(() => {
    let myInterval;
    if (time > 0) {
      myInterval = setInterval(() => {
        setTime(time - 1)
      }, 1000)
    }
    return () => clearInterval(myInterval)
  }, [time])

  const resultQue = () => {
    setShowScore(!showScore)

  }
  useEffect(() => {
    if (time <= 0) {
      return resultQue();
    }

  }, [time])





  const getVariant = (e) => {
    if (currentQuestion < datas.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
    if (datas[currentQuestion].correctAnswer == e.target.innerHTML) {
      setScore(score + 1)
    }
  }

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1)
  }
  const prevQuestion = () => {
    setCurrentQuestion(currentQuestion - 1)
  }


  return (
    <div className="quiz-box">
      {showScore ?
        <div className="score-box">
          <h1>Final Results</h1>
          <h2>
            Correct answers:{score}
          </h2>

          <button onClick={() => location.reload()}>Try again</button>
        </div> :


        <>
          <header>
            <h3>awosome quiz application</h3>
            <div className="time">
              <span>Time left</span>
              <p>{time}</p>
            </div>
          </header>

          <main>
            <div className="questions">
              <h4>{currentQuestion + 1}. {datas[currentQuestion].question}</h4>
            </div>
            <div className="variants">
              {datas[currentQuestion].variants.map(variant => {
                return (
                  <button className="variant-btn" key={nanoid()}
                    onClick={getVariant}>
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
              <button className={`result-btn ${currentQuestion < datas.length - 1 ? 'none' : 'result-block'}`} onClick={resultQue}>Results Que</button>

            </div>
          </footer>

        </>
      }
    </div>
  );
}

export default Quiz;
