import { useContext } from 'react'
import './ScoreBox.css'
import Context from '../../Context/Context'

function ScoreBox() {
    const { score } = useContext(Context)


    return (
        <div className="score-box">
            <h1>Final Results</h1>
            <h2>
                Correct answers:{score}
            </h2>

            <button onClick={() => location.reload()}>Try again</button>
        </div>
    )
}

export default ScoreBox