import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import { useState, useEffect } from 'react'
import axios from 'axios'
import PersonsService from './components/PersonsService'

export const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const filteredNames = persons && persons.length > 0 ? persons.filter(person => person && person.name && person.name.toLowerCase().includes(newSearch.toLowerCase())) : []

  const addName = async(event) => {
    event.preventDefault()

    if (persons.map(item => item.name.toLowerCase()).includes(newName.toLowerCase())){
      alert(`${newName} is already added to phonebook`)
      return;
    }   

    const personObject = {
      name: newName,
      number: newNumber,
    }

    setPersons(persons.concat(await PersonsService.create(personObject)))
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

  const deleteHandler = async (personToDelete) => {
    if (window.confirm("Delete "+ personToDelete.name + " ?")) {
      console.log("Deleted: " + personToDelete.id)
      await PersonsService.deletePerson(personToDelete)
      setPersons(filteredPersons => filteredPersons.filter(person => person.id !== personToDelete.id))    
    }
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
      <Persons newSearch={newSearch} filteredNames={filteredNames} persons={persons} deleteHandler={deleteHandler}/>
    </div>
  )
}



export default App