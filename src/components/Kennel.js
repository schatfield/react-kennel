import React, { Component } from 'react'
import './Kennel.css'
import AnimalCard from './animal/AnimalCard'
import EmployeeCard from './employee/EmployeeCard'
import LocationCard from './location/LocationCard'
import OwnerCard from './owner/OwnerCard'
import NavBar from './nav/NavBar'

class Kennel extends Component {
    render() {
        return (
            <div>
            <div>
                <NavBar /></div>
            <div>
                <h2>Student Kennels<br />
                    <small>Loving care when you're not there.</small>
                </h2>
                <address>
                    Visit Us at the Nashville North Location
                    <br />500 Puppy Way
                </address>
            </div>
            <div>
                <AnimalCard />
                <EmployeeCard />
                <LocationCard />
                <OwnerCard />
            </div>
            </div>
        );
    }
}

export default Kennel