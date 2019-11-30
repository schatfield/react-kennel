const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/employee_location/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/employees_location`).then(result => result.json())
  },

  delete(id) {
    return fetch(`http://localhost:5002/employees_location/${id}`, {
      method: "DELETE"
    })
      .then(result => result.json())
  },

  post(newEmployeeWithLocation) {
    return fetch(`${remoteURL}/employees_locations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newEmployeeWithAnimal)
    }).then(data => data.json())
  },
  
  update(editedAnimal) {
    return fetch(`${remoteURL}/animals/${editedAnimal.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedAnimal)
    }).then(data => data.json());
  }
}