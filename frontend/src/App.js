import React, { Component } from 'react';
import {BrowserRouter} from "react-router-dom";
import { Route  } from 'react-router-dom'
import Home from './components/Home'
import  AboutActivity from './components/AboutActivity'
import BackToActivities from './components/BackToActivities'
import Footer from './components/Footer'
import './App.css';
import Address from './components/Address';
import Confirm from './components/Confirm';
import ApiService from './api/ApiService';

const apiService = new ApiService();



class App extends Component {
    // Creating state to store the variables of the field
    state = {
        'name' : '',
        'dateFrom' : '',
        'dateTo': '',
        'webPage': '',
        'phone': '',
        'address': {
            'buildingName' : '',
            'buildingUnit': '',
            'placeName': '',
            'postcode': '',
            'streetName': '',
            'streetNumber': '',
            'town': ''
        }
    }

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.nextListener = this.nextListener.bind(this);
        this.getCurrentState = this.getCurrentState.bind(this);
    }
    // This basically validates if all the required fields are filled
    // A plan to add an error notice in the future
    nextListener(path){
        if(path === 'activity'){
            if(this.state.name !== '' && this.state.dateFrom !== '' 
                && this.state.dateTo !== '' && this.state.webPage !== ''){
                    return true;
                }
        } else if (path === 'address'){
            if(this.state.address.streetName !== '' && this.state.address.placeName !== ''){
                return true;
            }
        }
        return false
    }

    // loading the first address from the Django Backend
    componentDidMount() {
        var  self  =  this;
        apiService.getAddress().then(function(result) {
            console.log(result)
            self.setState({address: result.data})
        })
    }
    // This syncs the input with the state
    handleChange(input,event) {
        if(input.activity){
            this.setState({[input.activity]: event.target.value})
        } else if(input.address){
            let address = this.state.address;
            address[input.address] = event.target.value
            this.setState({address: address})
        }
        console.log(this.state)
    }

    getCurrentState(){
        return this.state;
    }

  render() {
    return (
        <BrowserRouter>
            <div className="main">
                <div className="header container">
                    <div className="header-left">
                        <div className="logo"></div>
                        
                    </div>
                    <div className="header-right">
                        <h2 className="name">Mr Boing's Trampoline Club</h2>
                        <Route path="/:id"  component={BackToActivities} />
                    </div>
                    
                </div>
                <div className="content container">

                    <Route path="/" exact render={() => 
                            <Home state={this.state} />
                            } />
                    <Route path="/activity" exact 
                        render={() => 
                            <AboutActivity state={this.state} handleChange={this.handleChange} />
                            } />

                    <Route path="/address" exact 
                        render={() => 
                            <Address state={this.state} handleChange={this.handleChange} />
                            } />

                    <Route path="/confirm" exact 
                        render={() => 
                            <Confirm state={this.state} handleChange={this.handleChange} />
                            } />
                </div>
                <Route path="/:id" render={(props) => <Footer getCurrentState={this.getCurrentState}  nextListener={this.nextListener} {...props} /> } />
            </div>  
        </BrowserRouter>
    );
  }
}

export default App;
