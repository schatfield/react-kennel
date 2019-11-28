import React, { Component } from "react"
import "./OwnerForm.css"
import OwnerManager from "../../modules/OwnerManager"

class OwnerEditForm extends Component {
  //set the initial state
  state = {
    ownerName: "",
    ownerId: "",
    loadingStatus: true,
    owners: []
  };

  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  updateExistingOwner= evt => {
    console.log(this.state.ownerName)
    evt.preventDefault()
    this.setState({ loadingStatus: true });
    const editedOwner= {
      id: this.props.match.params.ownerId,
      name: this.state.ownerName,
    };

    OwnerManager.update(editedOwner)
      .then(() => this.props.history.push("/Owners"))
  }

  componentDidMount() {
    OwnerManager.get(this.props.match.params.ownerId)
      .then(owner=> {
        this.setState({
          ownerName: owner.name,
          loadingStatus: false,
        });
      });

      OwnerManager.getAll()
      .then(owners => this.setState({owners: owners}))
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
                id="ownerName"
                value={this.state.ownerName}
              />
              <label htmlFor="ownerName">Owner name</label>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingOwner}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default OwnerEditForm