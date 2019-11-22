import { Route, withRouter, Redirect } from "react-router-dom"
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
// //only include these once they are built - previous practice exercise
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import AnimalDetail from './animal/AnimalDetail'
import LocationDetail from './location/LocationDetail'
import AnimalForm from './animal/AnimalForm'
import AnimalEditForm from './animal/AnimalEditForm'
import Login from './auth/Login'



class ApplicationViews extends Component {

  isAuthenticated = () => localStorage.getItem("credentials") !== null
  // this method checks to see what's in local storage


  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />

        <Route exact path="/animals" render={props => {
          if (this.isAuthenticated()) {
            return <AnimalList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/animals/:animalId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          // console.log("Props from react-router-dom", props)
          return <AnimalDetail
            animalId={parseInt(props.match.params.animalId)} {...props} />
        }} />

        <Route
          path="/animals/:animalId(\d+)/edit" render={props => {
            return <AnimalEditForm {...props} />
          }}
        />

        {/*
  This is a new route to handle a URL with the following pattern:
  http://localhost:3000/animals/1

  It will not handle the following URL because the `(\d+)`
  matches only numbers after the final slash in the URL
  http://localhost:3000/animals/jack
*/}


        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props} />
        }} />

        <Route path="/login" component={Login} />


        {/* Make sure you add the `exact` attribute here */}
        <Route exact path="/locations" render={(props) => {
          return <LocationList />
        }} />
        <Route path="/locations/:locationId(\d+)" render={(props) => {
          // Pass the locationId to the LocationDetail Component
          return <LocationDetail locationId={parseInt(props.match.params.locationId)} />
        }} />

        <Route exact path="/employees" render={(props) => {
          return <EmployeeList />
        }} />
        <Route exact path="/owners" render={(props) => {
          return <OwnerList />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews

// isAuthenticated = () => localStorage.getItem("credentials") !== null
  // this method checks to see what's in local storage
