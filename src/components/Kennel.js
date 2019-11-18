import React, { Component } from 'react'
import './Kennel.css'
import AnimalCard from './animal/AnimalCard'
import EmployeeCard from './employee/EmployeeCard'
import LocationCard from './location/LocationCard'
import OwnerCard from './owner/OwnerCard'
import NavBar from './nav/NavBar'
import ApplicationViews from './ApplicationViews'

class Kennel extends Component {
    render() {
        return (
            
        <React.Fragment>
                <NavBar />
                <ApplicationViews />
        </React.Fragment>
            
                
        );
    }
}

export default Kennel