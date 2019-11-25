import React, { Component } from 'react'
//import the components we will need
import EmployeeCard from './EmployeeCard'
import EmployeeManager from '../../modules/EmployeeManager'

class EmployeeList extends Component {
  //define what this component needs to render
  // the word "class" here refers the object component? we use "this" below with dot notation becaseu this is an object
  state = {
    employees: [],
  }

  componentDidMount() {
    console.log("EMPLOYEES: componentDidMount");
    //getAll from AnimalManager and hang on to that data; put it in state
    EmployeeManager.getAll()
      .then((employeeArray) => {
        this.setState({
          employees: employeeArray
        })
      })
  }

  deleteEmployee = id => {
    EmployeeManager.delete(id)
      .then(() => {
        EmployeeManager.getAll()
          .then((newEmployees) => {
            this.setState({
              employee: newEmployees
            })
          })
      })
  }

  render() {
    console.log("EmployeeList: Render");
    console.log(this.state)

    return (
      <React.Fragment>
        <section className="section-content">
          <button type="button"
            className="btn"
            onClick={() => { this.props.history.push("/employees/new") }}>
            Add Employee
  </button>
        </section>

        <div className="container-cards">
          {this.state.employees.map(employee =>
            <EmployeeCard
              key={employee.id}
              employee={employee}
              deleteEmployee={this.deleteEmployee}

            />
          )}
        </div>
      </React.Fragment>
    )
  }
}


export default EmployeeList;