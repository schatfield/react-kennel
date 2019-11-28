import React, { Component } from 'react'
//import the components we will need
import LocationCard from './LocationCard'
import LocationManager from '../../modules/LocationManager'

class LocationList extends Component {
  //define what this component needs to render
  // the word "class" here refers the object component? we use "this" below with dot notation becaseu this is an object
  state = {
    locations: [],
  }

  componentDidMount() {
    console.log("LOCATION LIST: ComponentDidMount");
    //getAll from LocationManager and hang on to that data; put it in state
    LocationManager.getAll()
      .then((locationsArray) => {
        console.log("Get Locations: ", locationsArray)
        this.setState({
          locations: locationsArray
        })
      })
  }

  deleteLocation = id => {
    LocationManager.delete(id)
      .then(() => {
        LocationManager.getAll()
          .then((newLocations) => {
            this.setState({
              locations: newLocations
            })
          })
      })
  }

  render() {
    console.log("LocationList: Render");
    console.log("Location LIst: ", this.props)


    return (
      < React.Fragment >

        <section className="section-content">
          <button type="button"
            className="btn"
            onClick={() => { this.props.history.push("/locations/new") }}>
            Add Location
  </button>
        </section>


        <div className="container-cards">
          {this.state.locations.map(location =>
            <LocationCard
              key={location.id}
              place={location}
              deleteLocation={this.deleteLocation}
              {...this.props}

            />
          )}
        </div>
      </React.Fragment >
    )
  }
}
export default LocationList

// Here we're using our LocationCard. 
// Everthing under <locationCard is "props"
// the "key" won't console.log as a prop, it's something you need to di
// location={location} "location" is the name like the key in a key value pair
// In this page, you are passing location as a prop on <LocationCard />            
// {location} is the data on your JSON file in your locations object. you are passiing that in, like value in a key value pair