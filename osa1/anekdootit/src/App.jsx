import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>Give feedback</h2>
      <button>Good</button><button>Neutral</button><button>Bad</button>
      <h2>Statistics</h2>
      <p>Text</p>
    </div>
  )
}

export default App