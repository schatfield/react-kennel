import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './location.css'

class LocationCard extends Component {
  render() {
    console.log("LocationCard Props: ", this.props);
    return (
      <div className="card">
        <div className="card-content">
          <h3><b>{this.props.place.name}</b></h3>
          <p>Location</p>
          <button type="button"
            onClick={() => { this.props.history.push(`/locations/${this.props.place.id}/edit`) }}>Edit</button>
          <button type="button"
            onClick={() => this.props.deleteLocation(this.props.place.id)}>Discharge</button>
          <Link to={`/locations/${this.props.place.id}`}><button>Details</button></Link>
        </div>
      </div>
    );
  }
}

export default LocationCard;