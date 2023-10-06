import React, { useContext } from 'react'
import Context from '../../Context/Context'
import { nanoid } from 'nanoid'
import './QuizMain.css'

function QuizMain() {
    const { datas, currentQuestion, setCurrentQuestion, score, setScore } = useContext(Context)
    const getVariant = (e) => {
        if (currentQuestion < datas.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        }
        if (datas[currentQuestion].correctAnswer == e.target.innerHTML) {
            setScore(score + 1)
        }
    }
    
    return (
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
    )
}

export default QuizMain