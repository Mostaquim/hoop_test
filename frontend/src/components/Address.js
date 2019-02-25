import  React, { Component } from  'react';
/* This class manages the url /address */


class Address extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.ageSelectValues = this.ageSelectValues.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // Middle Function to pass the pages attribute to the main app
    handleChange = input => event => {
        input = {'address' : input}
        this.props.handleChange(input, event);
    }
    // Not necessary but kept anyways
    handleSubmit(event){
        event.preventDefault();
    }

    // A function that generates value from 0 to 9
    ageSelectValues(){
        return [...Array(9).keys()].map((value) => value+1);
    }

    render(){
        return (
            <div className="body">
                <div className="center-content">
                    <h2>Add the address</h2>
                    <button className="btn copy-address">Copy from existing activity</button>
                </div>
                <form onSubmit={this.handleSubmit} > 
                    <div className="form-group">
                        <label htmlFor="placeName">Place name</label>
                        <input 
                            value={this.props.state.address.placeName}
                            onChange={this.handleChange('placeName')} 
                            type="text" 
                            ref="placeName"
                            />
                    </div>
                    <div className="form-group half">
                        <label htmlFor="postcode">Postcode <span className="sub-label">Optional</span></label>
                        <input 
                            value={this.props.state.address.postcode}
                            onChange={this.handleChange('postcode')} 
                            type="text" 
                            ref="postcode"/>
                    </div>
                    <div className="form-group half">
                        <label htmlFor="buildingUnit">Building Unit<span className="sub-label">Optional</span></label>
                        <input 
                            value={this.props.state.address.buildingUnit}
                            onChange={this.handleChange('buildingUnit')} 
                            type="text" 
                            ref="buildingUnit"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="buildingName">Building Name<span className="sub-label">Optional</span></label>
                        <input 
                            value={this.props.state.address.buildingName}
                            onChange={this.handleChange('buildingName')} 
                            type="text" 
                            ref="buildingName"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="streetNumber">Street Number<span className="sub-label">Optional</span></label>
                        <input 
                            value={this.props.state.address.streetNumber}
                            onChange={this.handleChange('streetNumber')} 
                            type="text" 
                            ref="streetNumber"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="streetName">Street Name</label>
                        <input 
                            value={this.props.state.address.streetName}
                            onChange={this.handleChange('streetName')} 
                            type="text" 
                            ref="streetName"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="town">Town<span className="sub-label">Optional</span></label>
                        <input 
                            value={this.props.state.address.town}
                            onChange={this.handleChange('town')} 
                            type="text" 
                            ref="town"/>
                    </div>
                </form>
            </div>
        )
        
    }
}

export default Address