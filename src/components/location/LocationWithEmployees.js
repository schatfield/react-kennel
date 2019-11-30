import React, { Component } from 'react'
import LocationManager from '../../modules/LocationManager'
import EmployeeCard from '../employee/EmployeeCard'

class LocationWithEmployees extends Component {
    state = {
        location: {},
        employees: []
    }
    componentDidMount() {
        // console.log("API RESULT", APIResult)
        // got here now make fetch call to get location with employee
        LocationManager.getWithEmployees(this.props.match.params.locationId)
            .then((APIResult) => {
                this.setState({
                    location: APIResult,
                    employees: APIResult.employees
                })

            })
    }
    render() {
        return (
            <div className="card">
                <p>Location: {this.state.location.name}</p>
                {this.state.employees.map(employee =>
                    <EmployeeCard
                        key={employee.id}
                        employee={employee}
                        {...this.props}
                    />
                )}
            </div>
        )
    }

}



export default LocationWithEmployees;