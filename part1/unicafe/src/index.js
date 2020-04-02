import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const GiveFeedback = (props) => {
  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <button onClick={props.goodHandler}>Good</button>
        <button onClick={props.neutralHandler}>Neutral</button>
        <button onClick={props.badHandler}>Bad</button>
      </div>
    </div>

  )
}

const Statistics = (props) => {
  const totalCount = props.goodCount + props.neutralCount + props.badCount;
  return (
    <div>
      <div>Good: {props.goodCount}</div>
      <div>Neutral: {props.neutralCount}</div>
      <div>Bad: {props.badCount}</div>
      <div>Total: {totalCount}</div>
      <div>Average: {(props.goodCount + props.badCount*(-1))/totalCount}</div>
      <div>Positive: {props.goodCount/totalCount}</div>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <GiveFeedback goodHandler={() => setGood(good + 1)}
                    neutralHandler={() => setNeutral(neutral + 1)}
                    badHandler={() => setBad(bad + 1)}/>
      <br/>
      <Statistics goodCount={good} neutralCount={neutral} badCount={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)