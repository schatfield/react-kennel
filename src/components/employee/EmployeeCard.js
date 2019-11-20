import React, { Component } from 'react';
import './employee.css'

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <p>Employee</p>
         < h3>Name: <b>{this.props.employee.name}</b></h3>
          <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Discharge</button>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;