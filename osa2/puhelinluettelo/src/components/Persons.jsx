import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Persons({ newSearch, filteredNames, persons, deleteHandler }) {
  
    return (
        <>
        <h2>Numbers</h2>
        {newSearch 
        ? filteredNames.map((filteredName) => (
          <p key={uuidv4()}>
            {filteredName.name} {filteredName.number} 
            <button onClick={() => deleteHandler(filteredName)}>{"delete"}</button>
          </p>     
        ))
        : persons.map((person) => (
          <p key={uuidv4()}>
            {person.name} {person.number} 
            <button onClick={() => deleteHandler(person)}>{"delete"}</button>
          </p>
           ))
        }
        </>
    )
  }