import React, { Component } from 'react'
    //import the components we will need
    import AnimalCard from './AnimalCard'
    import AnimalManager from '../../modules/AnimalManager'

    class AnimalList extends Component {
        //define what this component needs to render
        // the word "class" here refers the object component? we use "this" below with dot notation becaseu this is an object
        state = {
            animals: [],
        }

    componentDidMount(){
        console.log("ANIMAL LIST: ComponentDidMount");
        //getAll from AnimalManager and hang on to that data; put it in state
        AnimalManager.getAll()
        .then((animalsArray) => {
            this.setState({
                animals: animalsArray
            })
        })
    }

    render(){
        console.log("ANIMAL LIST: Render");

        return(
            <div className="container-cards">
                {this.state.animals.map(animal => <AnimalCard key={animal.id} animal={animal}/>)}
            </div>
        )
    }
}

export default AnimalList


// below the return statement above, the curly brackets are allowing us to use vanilla javascript with JSX
// animal => is the item being looped through with .map. AnimalCard is a function that returns an object 