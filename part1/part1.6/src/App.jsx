import { useState } from 'react'
import './App.css'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGood = () => {
      setGood(good + 1)
      setTotal(total+1)
      console.log("total", total)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
    console.log("total", total)
  }
  const handleBad = () => {
    setBad(bad + 1)
    setTotal(total + 1)
    console.log("total", total)
  }

  return (
    <div>
      <h1>Feedback Engine</h1>
      <Button handleClick={handleGood} text={"Good"}/>
      <Button handleClick={handleNeutral} text={"Neutral"}/>
      <Button handleClick={handleBad} text={"Bad"} />
      <br></br>
      <p>Good: {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
    </div>
  )
}

export default App
