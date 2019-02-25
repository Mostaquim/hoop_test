import  React, { Component } from  'react';

// The purpose of this is to Show confirmation window before submitting 
// Later used this component to view the activiteis on the home page

class Confirm extends Component {

    render(){
        return (
            <div className="body">
                <h2>About Activity</h2>
                <p>Activity Name: {this.props.state.name}</p>
                <p>Recommended Age: From {this.props.state.dateFrom} To {this.props.state.dateTo}</p>
                <p>Activity Webpage: {this.props.state.webPage}</p>
                <p>Activity phone number: {this.props.state.phone}</p>
                <h2>Address:</h2>
                <p>Place Name:  {this.props.state.address.placeName}</p>
                <p>Postcode:  {this.props.state.address.postcode}</p>
                <p>Building Unit:  {this.props.state.address.buildingUnit}</p>
                <p>Building Name:  {this.props.state.address.buildingName}</p>
                <p>Street Name:  {this.props.state.address.streetName}</p>
                <p>Town:  {this.props.state.address.town}</p>
            </div>
        )
    }
}

export default Confirm;