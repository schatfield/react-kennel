import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './Animal.css'

class AnimalCard extends Component {
  render() {

    let deleteAnimalButton = "";

    if (this.props.deleteAnimal) {

      deleteAnimalButton = <button type="button" onClick={() => this.props.deleteAnimal(this.props.animal.id)}>Discharge</button>
      
     } 


    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture>
          <h3>Name: <b>{this.props.animal.name}</b></h3>
          <p>Breed: {this.props.animal.breed}</p>
          <button type="button"
            onClick={() => { this.props.history.push(`/animals/${this.props.animal.id}/edit`) }}>Edit</button>
          <Link to={`/animals/${this.props.animal.id}`}><button>Details</button></Link>
          {deleteAnimalButton}
        </div>
      </div>
    );
  }
}

export default AnimalCard;

// onClick is function call for the delete functionality. the definition is on AnimalList and looks like this:
// <AnimalCard
// key={animal.id}
// animal={animal}
// deleteAnimal={this.deleteAnimal} 