import React, { Component } from 'react'
//import the components we will need
import OwnerCard from './OwnerCard'
import OwnerManager from '../../modules/OwnerManager'

class OwnerList extends Component {
    //define what this component needs to render
    // the word "class" here refers the object component? we use "this" below with dot notation becaseu this is an object
    state = {
        owners: [],
    };

    componentDidMount() {
        console.log("OWNER LIST: ComponentDidMount");
        //getAll from OwnerManager and hang on to that data; put it in state
        OwnerManager.getAll()
            .then((ownersArray) => {
                this.setState({
                    owners: ownersArray
                })
            })
    };

    deleteOwner = id => {
        OwnerManager.delete(id)
            .then(() => {
                OwnerManager.getAll()
                    .then((newOwners) => {
                        this.setState({
                            owners: newOwners
                        })
                    })
            })
    };

    render() {
        console.log("OwnerList: Render");

        return (
            <React.Fragment>
                <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => { this.props.history.push("/owners/new") }}>
                        Add Owner
                </button>
                </section>
                <div className="container-cards">
                    {this.state.owners.map(owner =>
                        <OwnerCard
                            key={owner.id}
                            owner={owner}
                            deleteOwner={this.deleteOwner}
                            {...this.props}

                        />
                    )};
            </div>
            </React.Fragment>
        )
    };
};


export default OwnerList