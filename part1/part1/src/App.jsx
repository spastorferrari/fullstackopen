const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ];
  function Header(props) {
    return <h1>{props.text}</h1>
  };

  function Part(props) {
    return <p>{props.part} {props.exnum}</p>
  };

  function Content(props) {
    return (
      <div>
        <Part part={props.parts[0].name} exnum={props.parts[0].exercises} />
        <Part part={props.parts[1].name} exnum={props.parts[1].exercises} />
        <Part part={props.parts[2].name} exnum={props.parts[2].exercises} />
      </div>
    );
  };

  function Total(props){
    return <p>Number of exercies</p>
  }
  function Total(props) {
    return <p>Number of exercises {props.n1 + props.n2 + props.n3}</p>
  };

  return (
    <div>
      <Header text={course} />
      <Content parts={parts} />
      <Total n1={parts[0].exercises} n2={parts[1].exercises} n3={parts[2].exercises} />
    </div>
  )
}

export default App