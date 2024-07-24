import { useState } from 'react'
import './App.css'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick} class>
    {text}
  </button>
)

const StatisticsLine = (props) => {
  return(
    <tr>
      <td>{props.text} {props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const total = props.total
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad
  const avgRatio = ((good - bad) / total).toFixed(2)
  const positiveRatio = (good / total*100).toFixed(1)
  const positiveRatiostr = (positiveRatio + "%")

  if (total == 0){ 
    return(
      <div>
        <p>No feedback provided.</p>
      </div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Statistics</th>
          </tr>
          <StatisticsLine text="Total" value={total} />
          <StatisticsLine text="Good" value={good} />
          <StatisticsLine text="Neutral" value={neutral} />
          <StatisticsLine text="Positive Ratio" value={positiveRatiostr} />
          <StatisticsLine text="Index" value={avgRatio} />
        </tbody>
      </table>
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
      setTotal(total+1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
    setTotal(total + 1)
  }
  const props = {total, good, neutral, bad};

  return (
    <div>
      <h1>Feedback Engine</h1>
      <Button handleClick={handleGood} text={"Good"}/>
      <Button handleClick={handleNeutral} text={"Neutral"}/>
      <Button handleClick={handleBad} text={"Bad"} />
      <br></br>
      <Statistics {...props}/>
    </div>
  )
}

export default App
