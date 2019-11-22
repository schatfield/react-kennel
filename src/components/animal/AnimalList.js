import React, { Component } from 'react';
//import the components we will need
import AnimalCard from './AnimalCard';
import AnimalManager from '../../modules/AnimalManager';

class AnimalList extends Component {
  //define what this component needs to render
  // the word "class" here refers the object component? we use "this" below with dot notation becaseu this is an object
  state = {
    animals: [],
  }

  componentDidMount() {
    console.log("ANIMAL LIST: ComponentDidMount");
    //getAll from AnimalManager and hang on to that data; put it in state
    AnimalManager.getAll()
      .then((animalsArray) => {
        this.setState({
          animals: animalsArray
        })
      })
  }

  deleteAnimal = id => {
    AnimalManager.delete(id)
      .then(() => {
        AnimalManager.getAll()
          .then((newAnimals) => {
            this.setState({
              animals: newAnimals
            })
          })
      })
  }

  render() {
    console.log("AnimalList: Render");

    return (
      <React.Fragment>
        <section className="section-content">
          <button type="button"
            className="btn"
            onClick={() => { this.props.history.push("/animals/new") }}>
            Admit Animal
  </button>
        </section>
        <div className="container-cards">
          {this.state.animals.map(animal =>
            <AnimalCard
              key={animal.id}
              animal={animal}
              deleteAnimal={this.deleteAnimal}
            />
          )}
        </div>
      </React.Fragment>
    )
  }
}


export default AnimalList;

// <AnimalCard here contains the AnimalCard component code and this is where your props are "defined". these are the defined props
// key={animal.id}
// animal={animal}
// deleteAnimal={this.deleteAnimal}
// these props can be seen in action on AnimalCard under the Name and Breed. NOTE: if "animal" was "shawna" on AnimalList, it would need to be "shawna" on AnimalCard. e.g.this.props.shawna.name
// <h3>Name: <b>{this.props.animal.name}</b></h3>
// <p>Breed: {this.props.animal.breed}</p> 

// the best placd to put console logs to troublshoot are between your render and your return
// below the return statement above, the curly brackets are allowing us to use vanilla javascript with JSX
// animal => is the item being looped through with .map. AnimalCard is a function that returns an object 
// the "key" is for react to identify a specific thing of the same type?
