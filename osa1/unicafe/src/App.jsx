import { useState } from 'react'
import Feedback from './components/Feedback'
import Statistics from './components/Statistics'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [feedbacks, setCount] = useState({
    good: 0,
    bad: 0,
    neutral: 0, 
  })

  const giveFeedback = (text) => {
    const newFeedbacks = {
      ...feedbacks, 
      [text]: feedbacks[text] + 1,
      }
      setCount(newFeedbacks)
      console.log(feedbacks[text])
  }

  return (
    <div>
      <Feedback />
      <Button handleClick={() => giveFeedback('good')} text='Good'/>
      <Button handleClick={() => giveFeedback('neutral')} text='Neutral'/>
      <Button handleClick={() => giveFeedback('bad')} text='Bad'/>
      <Statistics feedbacks={feedbacks} />
    </div>
  )
}

export default App