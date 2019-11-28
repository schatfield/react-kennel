import React, { Component } from "react"
import "./LocationForm.css"
import LocationManager from "../../modules/LocationManager"

class LocationEditForm extends Component {
  //set the initial state
  state = {
    locationId: "",
    locationName: "", // NASHVILLE TN
    loadingStatus: true,
    locations: []
  };

  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  updateExistingLocation = evt => {
    evt.preventDefault()
    this.setState({ loadingStatus: true });
    const editedLocation= {
      id: this.props.match.params.locationId,
      name: this.state.locationName,
    };

    LocationManager.update(editedLocation)
      .then(() => this.props.history.push("/locations"))
  }

  componentDidMount() {
    LocationManager.get(this.props.match.params.locationId)
      .then(location=> {
        this.setState({
          place: location.name,
          loadingStatus: false,
        });
      });

      LocationManager.getAll()
      .then(locations => this.setState({ locations: locations }))
      
    }
  

  render() {
    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="locationName"
                value={this.state.locationName}
              />
              <label htmlFor="locationName">Location name</label>

              {/* <select
                className="form-control"
                id="locationId"
                value={this.state.locationId}
                onChange={this.handleFieldChange}
              >
                {this.state.locations.map(location =>
                  <option key={location.id} value={location.id}>
                    {location.name}
                  </option>
                )}
              </select> */}
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingLocation}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default LocationEditForm