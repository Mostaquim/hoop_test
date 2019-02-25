import  React, { Component } from  'react';

/*
This class manages the /activity URL
*/


class AboutActivity extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.ageSelectValues = this.ageSelectValues.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    // This is not actually required
    handleSubmit(event){
        event.preventDefault();
    }

    // The idea is to let the app know which url the data comes from, so a middle function is kept to pass the attributes
    handleChange = input => event => {
        input = {'activity' : input}
        this.props.handleChange(input, event);
    }

    // this generates numbers from 1 to 9
    ageSelectValues(){
        return [...Array(9).keys()].map((value) => value+1);
    }

    render(){
        return (
            <div className="body">
                <div className="center-content">
                    <h2>About your activity</h2>
                </div>
                <form onSubmit={this.handleSubmit} > 
                    <div className="form-group">
                        <label htmlFor="name">Activity name</label>
                        <input 
                            onChange={this.handleChange('name')} 
                            type="text" 
                            ref="name"
                            value={this.props.state.name}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dateFrom">Recommended Age</label>
                        <div className="two-form">
                            <select 
                                onChange={this.handleChange('dateFrom')} 
                                value={this.props.state.dateFrom} 
                                ref="dateFrom" 
                                >
                                <option value="" disabled >From</option>
                                {this.ageSelectValues().map((value) => 
                                        <option key={value} value={value}>{value + ' Years'}</option>
                                    )}
                            </select>
                            <select 
                                onChange={this.handleChange('dateTo')} 
                                value={this.props.state.dateTo}
                                ref="dateTo" 
                                >
                                <option value="" disabled >To</option>
                                {this.ageSelectValues().map((value) => 
                                        <option key={value} value={value}>{value + ' Years'}</option>
                                    )}
                            </select>
                        
                        </div>
                        
                    </div>
                    <div className="form-group">
                        <label className="has-caption" htmlFor="webPage">Activity Webpage</label>
                        <span className="inp-caption">Use a specific page if possible</span>
                        <input
                            value={this.props.state.webPage}
                            onChange={this.handleChange('webPage')} 
                            type="text" 
                            ref="webPage" 
                            placeholder="e.g. example.com/activity" />
                    </div>
                    <div className="form-group half">
                        <label htmlFor="phone">Activity Phone Number <span className="sub-label">Optional</span></label>
                        <input 
                            value={this.props.state.phone}
                            onChange={this.handleChange('phone')} 
                            type="text" 
                            ref="phone"/>
                    </div>
                </form>
            </div>
        )
        
    }
}

export default AboutActivity