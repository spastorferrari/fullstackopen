const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} y/o. Td is {props.date}</p>
    </div>
  )
}

const App = () => {
  const date= Date.now()
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Seb" age={26} date={date}/>
      <Hello name="Mary" age={26} date={date}/>
      <Hello name="Caco" age={27} date={date}/>
    </div>
  )
}
export default App