import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './employee.css';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <b>{this.props.employee.name}</b></h3>
          <p>Employee</p>
          <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Discharge</button>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;