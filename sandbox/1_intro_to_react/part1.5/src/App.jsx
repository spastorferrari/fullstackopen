import { useState } from 'react'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        The app is used by pressing the buttons.
      </div>
    )
  }
  return (
    <div>
      Button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [up, setUp] = useState(0)
  const [total, setTotal] = useState(0)
  const [value, setValue] = useState(10)

  const [allClicks, setAll] = useState([])

  const hello = (who) => () => {
    console.log("hello", who)
  }

  const handleLeftClick = () => {
    setAll(allClicks.concat('LEFT | '))
    setLeft(left + 1)
    setTotal(total + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('RIGHT | '))
    setRight(right + 1)
    setTotal(total + 1)
  }

  const handleUpClick = () => {
    setAll(allClicks.concat("UP | "))
    setUp(up + 1)
    setTotal(total + 1)
  }

  const setToValue = (newValue) => () => {
    setAll(allClicks.concat([newValue]))
    console.log('value now', newValue)  // print the new value to console
    setValue(newValue)
  }

  return (
    <div>
      <Button handleClick={handleLeftClick} text="Left"/>
      <Button handleClick={handleUpClick} text="Up" />
      <Button handleClick={handleRightClick} text="Right" />
      <button onClick={hello('sebas')}>log</button>
      <br></br>
      {value}
      <button onClick={setToValue(value+1000)}>thousand</button>
      <button onClick={setToValue(0)}>reset</button>
      <button onClick={setToValue(value+1)}>increase</button>      
      <p>Left: {left} | Up: {up} | Right: {right}</p>
      <p>Total: {total}</p>
      <History allClicks={allClicks} />
    </div>
  )
}


export default App