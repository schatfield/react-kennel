import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'

class LocationDetail extends Component {

  state = {
      location: "",
      locadingStatus: true,
  }

  componentDidMount(){
    console.log("LocationDetail: ComponentDidMount", "props", this.props);
    //get(id) from LocationManager and hang on to the data; put it into state
    LocationManager.get(this.props.locationId)
    .then((location) => {
      console.log("Locations: ", location);
      this.setState({
        location: location.location,
        locadingStatus: false
      });
    });
  }

  handleDelete = () => {
    this.setState({loadingStatus: true})
    LocationManager.delete(this.props.animalId)
    .then(() => this.props.history.push("/animals"))
  }
  // invoke the delete function in LocationManager and re-direct to the location list


  render() {
          return (
            <div className="card">
              <div className="card-content">
                <picture>
                  <img src={require('./dog.svg')} alt="My Dog" />
                </picture>
                <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.location}</span></h3>
                <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Discharge</button>
              </div>
            </div>
          );
        }
    }


export default LocationDetail