const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/employee_animals/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/employee_animals`).then(result => result.json())
  },

  delete(id) {
    return fetch(`http://localhost:5002/employee_animals/${id}`, {
      method: "DELETE"
    })
      .then(result => result.json())
  },

  post(newEmployeeWithAnimal) {
    return fetch(`${remoteURL}/employee_animals`, {
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