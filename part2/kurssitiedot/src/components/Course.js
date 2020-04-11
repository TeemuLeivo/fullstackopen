import React from 'react'

const Course = (props) => {
    return (
      <div>
        <Header courseName={props.course.name} />
        <Content courseParts={props.course.parts} />
        <Total  courseParts={props.course.parts} />
      </div>
    )
  }
  
  const Header = (props) => {
    return <h2>{props.courseName}</h2>
  }
  
  const Part = (props) => {
    return (
        <p>
          {props.part.name} {props.part.exercises}
        </p>
    )
  }
  
  const Content = (props) => {
    return (
      <div>
        {props.courseParts.map(
          (coursePart) => {
            return (<Part part={coursePart} />)
        })}
      </div>
    )
  }
  
  const Total = (props) => {
    return <p>
      Total number of exercises: 
      {props.courseParts.reduce(((sum, coursePart) => sum + coursePart.exercises), 0 )}
    </p>
  }

  export default Course