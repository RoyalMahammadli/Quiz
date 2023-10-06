import React, { useContext } from 'react'
import './QuizFooter.css'
import Context from '../../Context/Context'

function QuizFooter() {
    const { datas, currentQuestion,setCurrentQuestion,resultQue } = useContext(Context)

   


    const nextQuestion = () => {
        setCurrentQuestion(currentQuestion + 1)
    }
    const prevQuestion = () => {
        setCurrentQuestion(currentQuestion - 1)
    }





    return (
        <footer>
            <span className="active-question-numbs"> {currentQuestion + 1} of {datas.length} Questions</span>
            <div className="next-prev-btn">
                <button className={`prev-btn ${currentQuestion <= 0 ? 'none' : 'block'}`} onClick={prevQuestion}>Prev Que</button>
                <button className={`next-btn ${currentQuestion < datas.length - 1 ? 'block' : 'none'}`} onClick={nextQuestion}>Next Que</button>
                <button className={`result-btn ${currentQuestion < datas.length - 1 ? 'none' : 'result-block'}`} onClick={resultQue}>Results Que</button>

            </div>
        </footer>
    )
}

export default QuizFooter