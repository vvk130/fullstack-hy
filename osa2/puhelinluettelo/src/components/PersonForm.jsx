export default function PersonForm({ newName, newNumber, handleNameChange, handleNumberChange, addName }) {
    return (
        <>
        <form onSubmit={addName}>
        <div>
          name: <input 
          value={newName}
          onChange={handleNameChange}
          />
        </div>
        <div>
          number: <input 
          value={newNumber}
          onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
        </>
    )
  }