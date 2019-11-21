import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './location.css'

class LocationCard extends Component {
  render() {
    console.log("LocationCard Props: ", this.props);
    return (
      <div className="card">
        <div className="card-content">
          <h3><b>{this.props.location.location}</b></h3>
           <p>Location</p>
          <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Discharge</button>
        </div>
      </div>
    );
  }
}

export default LocationCard;