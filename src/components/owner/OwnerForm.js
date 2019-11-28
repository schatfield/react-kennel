import React, { Component } from 'react';
import OwnerManager from '../../modules/OwnerManager';
import './OwnerForm.css';

class OwnerForm extends Component {
    state = {
        name: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create location object, invoke the OwnerManager post method, and redirect to the full location list
    */
    constructNewOwner = evt => {
        evt.preventDefault();
        if (this.state.OwnerName === "") {
            window.alert("Please input an owner name");
        } else {
            this.setState({ loadingStatus: true });
            const owner = {
                name: this.state.OwnerName,
            };
            // Create the location and redirect user to location list

            OwnerManager.post(owner)
                .then(() => this.props.history.push("/owners"));
        }

    };


    render() {

        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="ownerName"
                                placeholder="name"
                            />
                            <label htmlFor="ownerName">Owner Name</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewOwner}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default OwnerForm;