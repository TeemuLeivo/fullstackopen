import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const GiveFeedback = (props) => {
  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <Button buttonHandler={props.goodHandler} buttonText="Good" />
        <Button buttonHandler={props.neutralHandler} buttonText="Neutral" />
        <Button buttonHandler={props.badHandler} buttonText="Bad" />
      </div>
    </div>

  )
}

const Button = (props) => {
  return (
  <button onClick={props.buttonHandler}>{props.buttonText}</button>
  )
}

const StatisticsLine = (props) => {
  return (
<div>{props.text}: {props.value}</div>
  )
}

const Statistics = (props) => {
  const totalCount = props.goodCount + props.neutralCount + props.badCount;
  if(totalCount > 0){
    return (
      <div>
        <StatisticsLine text="Good" value={props.goodCount} />
        <StatisticsLine text="Neutral" value={props.neutralCount} />
        <StatisticsLine text="Bad" value={props.badCount} />
        <StatisticsLine text="Total" value={totalCount} />
        <StatisticsLine text="Average" value={(props.goodCount + props.badCount*(-1))/totalCount} />
        <StatisticsLine text="Positive" value={props.goodCount/totalCount} />
      </div>
    )
  } else {
      return (
        <div> No feedback given</div>
      )
  }
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