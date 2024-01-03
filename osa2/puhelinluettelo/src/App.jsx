import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import { useState } from 'react'

const App = (props) => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122'},
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const filteredNames = persons.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase()))

  const addName = (event) => {
    event.preventDefault()

    if (persons.map(item => item.name).includes(newName)){
      alert(`${newName} is already added to phonebook`)
      return;
    }   

    const personObject = {
      name: newName,
      number: newNumber,
    }
    setPersons(persons.concat(personObject))
    setNewNumber('')
    setNewName('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newSearch={newSearch} setNewSearch={setNewSearch}/>
      <h2>add a new</h2>
      <PersonForm         
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addName={addName}/>
      <Persons newSearch={newSearch} filteredNames={filteredNames} persons={persons}/>
    </div>
  )
}



export default App