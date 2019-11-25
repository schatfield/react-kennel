import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationForm.css'


class LocationForm extends Component {
    state = {
        name: "",
        loadingStatus: false,
    };


    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    // stateToChange[evt.target.id] this is square bracket notation on an object, review objects chapter in book 2

    /*  Local method for validation, set loadingStatus, create animal object, invoke the AnimalManager post method, and redirect to the full animal list
    */
    constructNewLocation = evt => {
        evt.preventDefault();
        if (this.state.LocationName === "") {
            window.alert("Please input an location name");
        } else {
            this.setState({ loadingStatus: true });
            const employee = {
                name: this.state.LocationName,
            };

            // Create the animal and redirect user to animal list
            LocationManager.post(location)
            .then(() => this.props.history.push("/locations"));
        }
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
                        id="employeeName"
                        placeholder="name"
                        />
                        <label htmlFor="employeeName">Name</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewEmployee}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default LocationForm