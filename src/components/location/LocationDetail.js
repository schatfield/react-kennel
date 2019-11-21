import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'

class LocationDetail extends Component {

  state = {
      location: ""
  }

  componentDidMount(){
    console.log("LocationDetail: ComponentDidMount", this.props);
    //get(id) from LocationManager and hang on to the data; put it into state
    LocationManager.get(this.props.locationId)
    .then((location) => {
      console.log("Locations: ", location);
      this.setState({
        location: location.location
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture>
            <h3>Location: <span style={{ color: 'darkslategrey' }}>{this.state.location}</span></h3>
        </div>
      </div>
    );
  }
}

export default LocationDetail;