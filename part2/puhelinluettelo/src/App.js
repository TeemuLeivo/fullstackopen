import React, { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-521233' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterValue, setNewFilterValue] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleFilterChange = (event) => {
    setNewFilterValue(event.target.value);
  }

  const handleAddingName = (event) => {
    event.preventDefault();
    if(persons.some(person => person.name === newName)){
      alert(`${newName} is already in the phonebook`);
    }
    else{
      setPersons(persons.concat({name: newName, number: newNumber}));
      setNewName("");
    }
  }

  const filterByName = (person) => {
    return person.name.toUpperCase().includes(filterValue.toUpperCase());
  }

  return (
    <div>
      <Filter filterValue={filterValue} filterChangeHandler={handleFilterChange} />
      <h2>Phonebook</h2>
      <PersonForm newName={newName} newNumber={newNumber} addPersonHandler={handleAddingName} nameChangeHandler={handleNameChange} numberChangeHandler={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons filterFunction={filterByName} personList={persons} />
    </div>
  )

}

export default App