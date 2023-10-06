import React, { useEffect, useState } from 'react'
import './QuizHead.css'

function QuizHead() {
  const [time, setTime] = useState(200)

  useEffect(() => {
    let myInterval;
    if (time > 0) {
      myInterval = setInterval(() => {
        setTime(time - 1)
      }, 1000)
    }
    return () => clearInterval(myInterval)
  }, [time])

  useEffect(() => {
    if (time <= 0) {
      return resultQue();
    }

  }, [time])





  return (

    <header>
      <h3>awosome quiz application</h3>
      <div className="time">
        <span>Time left</span>
        <p>{time}</p>
      </div>
    </header>

  )
}

export default QuizHead