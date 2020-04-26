import React, { useState, useEffect } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterValue, setNewFilterValue] = useState("");

  const getDataHook = () => {
    console.log("get all");
    personService.getAll().then(allPersons => {
      console.log("returned persons: ", allPersons);
      setPersons(allPersons);
    });
  };
  useEffect(getDataHook, []);

  const handleNameChange = event => {
    setNewName(event.target.value);
  };

  const handleNumberChange = event => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = event => {
    setNewFilterValue(event.target.value);
  };

  const handleAddingName = event => {
    event.preventDefault();
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already in the phonebook`);
    } else {
      const newPerson = { name: newName, number: newNumber };
      personService.create(newPerson).then(returnedPerson => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const deletePerson = id => {
    if(window.confirm("Do you want to delete the person?")){
      personService.deletePerson(id).then(getDataHook);
    }
  };

  const filterByName = person => {
    return person.name.toUpperCase().includes(filterValue.toUpperCase());
  };

  return (
    <div>
      <Filter
        filterValue={filterValue}
        filterChangeHandler={handleFilterChange}
      />
      <h2>Phonebook</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        addPersonHandler={handleAddingName}
        nameChangeHandler={handleNameChange}
        numberChangeHandler={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons
        filterFunction={filterByName}
        personList={persons}
        deleteHandler={deletePerson}
      />
    </div>
  );
};

export default App;
