import React from 'react';
import Course from './components/Course'

const App = (props) => {

  return (
    <div>
      <h1>Web development curriculum</h1>
      <div>
        {props.courses.map(c => <Course course={c} />)}
      </div>
    </div>
  )
  }
export default App;
