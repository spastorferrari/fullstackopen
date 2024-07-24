import { useState } from 'react'
import './App.css'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const Statistics = (props) => {
    const total = props.total
    const good = props.good
    const neutral = props.neutral
    const bad = props.bad
    const avgRatio = ((good - bad) / total).toFixed(2)
    const positiveRatio = (good / total * 100).toFixed(1)

    if (total == 0) {
        return (
            <div>
                <p>No feedback provided.</p>
            </div>
        )
    }
    return (
        <div>
            <p>Total {total}</p>
            <p>Good {good}</p>
            <p>Neutral {neutral}</p>
            <p>Positive Ratio {positiveRatio}%</p>
            <p>Index {avgRatio}</p>
        </div>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [total, setTotal] = useState(0)

    const handleGood = () => {
        setGood(good + 1)
        setTotal(total + 1)
    }
    const handleNeutral = () => {
        setNeutral(neutral + 1)
        setTotal(total + 1)
    }
    const handleBad = () => {
        setBad(bad + 1)
        setTotal(total + 1)
    }
    const props = { total, good, neutral, bad };

    return (
        <div>
            <h1>Feedback Engine</h1>
            <Button handleClick={handleGood} text={"Good"} />
            <Button handleClick={handleNeutral} text={"Neutral"} />
            <Button handleClick={handleBad} text={"Bad"} />
            <br></br>
            <Statistics {...props} />
        </div>
    )
}

export default App
