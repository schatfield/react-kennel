import React, { Component } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import './AnimalForm.css'

class AnimalForm extends Component {
    state = {
        animalName: "",
        breed: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        // this is javascript. handle an event
        // console.log("Event target id", evt.target.id)
        // console.log("Event target value", evt.target.value)
        
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        // console.log("stateToChange", stateToChange)
        this.setState(stateToChange);
        // sqaure bracket notation for object is being used above stateToChange[evt.target.id]. REVIEW OBJECTS CHAPTER IN BOOK 2
        // which input fields is this targeting? see state object above- animal name and breed
    };

    /*  Local method for validation, set loadingStatus, create animal object, invoke the AnimalManager post method, and redirect to the full animal list
    */
    constructNewAnimal = evt => {
        evt.preventDefault();
        if (this.state.animalName === "" || this.state.breed === "") {
            window.alert("Please input an animal name and breed");
        } else {
            this.setState({ loadingStatus: true });
            const animal = {
                name: this.state.animalName,
                breed: this.state.breed,
            };

            // Create the animal and redirect user to animal list
            AnimalManager.post(animal)
            .then(() => this.props.history.push("/animals"));
        }

        // if (this.state.animalName === "" || this.state.breed === "") this is saying if the state of the animal name field is empty, if the state of the breed field is empty, then alert with a pop window.
        // this.state.animalName - we arev getting our data from "state", the state of what's on the dom at that time?
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="animalName"
                        placeholder="Animal name"
                        />
                        <label htmlFor="animalName">Name</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="breed"
                        placeholder="Breed"
                        />
                        <label htmlFor="breed">Breed</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewAnimal}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default AnimalForm