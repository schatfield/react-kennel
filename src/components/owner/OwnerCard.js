import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './owner.css' 

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <b>{this.props.owner.name}</b></h3>
          <p>Owner</p>
          <button type="button" onClick={() => this.props.deleteOwner(this.props.owners.id)}>Discharge</button>
        
        </div>
      </div>
    );
  }
}

export default OwnerCard;

  //* <Link to={`/owners/${this.props.owner.id}`}><button>Details</button></Link> */