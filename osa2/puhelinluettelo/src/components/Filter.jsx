export default function Filter({ newSearch, setNewSearch }) {
    const handleSearch = (event) => {
      console.log(event.target.value)
      setNewSearch(event.target.value)
    }

    return (
        <>
       <form>
        <div>
          filter shown with: <input 
          value={newSearch}
          onChange={handleSearch}
          />
        </div>
      </form>
        </>
    )
  }