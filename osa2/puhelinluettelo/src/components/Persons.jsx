export default function Persons({ newSearch, filteredNames, persons }) {
    return (
        <>
        <h2>Numbers</h2>
        {newSearch 
        ? filteredNames.map((filteredName) => (
          <p key={filteredName.name}>
            {filteredName.name} {filteredName.number}
          </p>     
        ))
        : persons.map((person) => (
          <p key={person.name}>
            {person.name} {person.number}
          </p> ))
        }
        </>
    )
  }