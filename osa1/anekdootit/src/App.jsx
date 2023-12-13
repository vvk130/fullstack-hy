import Header from './components/Header'
import Total from './components/Total'
import Content from './components/Content'

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {name: 'Fundamentals of React', amount: 10},
    {name: 'Using props to pass data', amount: 7},
    {name: 'State of a component', amount: 14}
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App