import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './EmployeeForm.css';

class EmployeeCard extends Component {
  render() {

    let deleteEmployeeButton = "";

    if (this.props.deleteEmployee) {
      console.log("DELETE CHECK: ");
      deleteEmployeeButton = <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Discharge</button>
      
     };

    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <b>{this.props.employee.name}</b></h3>
          <p>Employee</p>
          <button type="button"
            onClick={() => { this.props.history.push(`/employees/${this.props.employee.id}/edit`) }}>Edit</button>
             <Link to={`/employees/${this.props.employee.id}`}><button>Details</button></Link>
          {deleteEmployeeButton}
        </div>
      </div>
    );
  }
}

export default EmployeeCard;