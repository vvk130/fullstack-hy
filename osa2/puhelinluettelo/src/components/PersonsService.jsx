import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const deletePerson = person => {
    const request = axios
    .delete(`${baseUrl}/${person.id}`)
    .then(response => response.data)
    .catch(error => {
      console.log('fail')
    })
    return request
}

export default { create, update, deletePerson }

