import React from "react";

const Persons = props => {
  return (
    <ul>
      {props.personList.filter(props.filterFunction).map((person, i) => {
        return (
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        );
      })}
    </ul>
  );
};

export default Persons;
