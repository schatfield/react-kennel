import React, { Component } from "react"
import "./EmployeeForm.css"
import EmployeeManager from "../../modules/EmployeeManager"
import LocationManager from "../../modules/LocationManager"

class EmployeeEditForm extends Component {
  //set the initial state
  state = {
    employeeName: "",
    employeeId: "",
    loadingStatus: true,
    locations: [],
    locationId: "",
  };

  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  updateExistingEmployee = evt => {
    evt.preventDefault()
    this.setState({ loadingStatus: true });
    const editedEmployee = {
      id: this.props.match.params.employeeId,
      name: this.state.employeeName,
      locationId: Number(this.state.locationId)
    };

    EmployeeManager.update(editedEmployee)
      .then(() => this.props.history.push("/employees"))
  }

  componentDidMount() {
    EmployeeManager.get(this.props.match.params.employeeId)
      .then(employee => {
        this.setState({
          employeeName: employee.name,
          loadingStatus: false,
        });
      });

    LocationManager.getAll()
      .then(locations => this.setState({ locations: locations }))
  }

  render() {
    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="employeeName"
                value={this.state.employeeName}
              />
              <label htmlFor="employeeName">Employee name</label>

              <select
                className="form-control"
                id="locationId"
                value={this.state.locationId}
                onChange={this.handleFieldChange}
              >
                {this.state.locations.map(place =>
                  <option key={place.id} value={place.id}>
                    {place.name}
                  </option>
                )}
              </select>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingEmployee}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default EmployeeEditForm