import  React, { Component } from  'react';
import {Link, withRouter} from 'react-router-dom'
import ApiService from '../api/ApiService';
const apiService = new ApiService();
/*
    This class manages the footer button, 
    validates the form and 
    saves data in the backend
*/

class Footer extends Component{

    constructor(props){
        super(props);
        this.backBtnHref = this.backBtnHref.bind(this)
        this.nextBtnHref = this.nextBtnHref.bind(this)
     }
     
    // This function creates dynamic link for the backbutton and also controls visibility
    backBtnHref(){
        switch(this.props.match.params.id){
            case 'activity':
                return '/'
            case 'address':
                return '/activity';
            case 'confirm':
                return 'address';
            default:
                return false;
        }
    }
    // This function creates dynamic link for the next button and also controls visibility
    nextBtnHref(){
        switch(this.props.match.params.id){
            case 'activity':
                return '/address'
            case 'address':
                return '/confirm'
            default:
                return false;
        }
    }

    // This button listens for events on the next button and potentially stops it
    nextListener(e){
        
        if(this.props.nextListener(this.props.match.params.id))
        {
            // Show Error message here
        } else{
            e.preventDefault();
        }
       
    }

    // this button saves changes after confirmation
    saveChange(){
        apiService.createActivity(this.props.getCurrentState()).then(()=> {this.props.history.push('/')})
    }


    render(){
        return (
            <div className="footer-container">
                <div className="footer">
                    {
                        this.backBtnHref() ?  
                            (
                            <Link 
                                className="btn" 
                                id="back-btn"  
                                to={this.backBtnHref()}
                                >Back</Link>
                            )
                            : null
                    }
                    {   
                        this.nextBtnHref() ?
                            (
                                <Link 
                                    className="btn" 
                                    id="next-btn" 
                                    onClick={(e)=>this.nextListener(e) }
                                    to={this.nextBtnHref()}
                                    >Next</Link>
                            )
                            : null
                    }
                    {   // Toggles the next button with confrim and saves data on click
                        this.props.match.params.id === 'confirm' ?
                            (
                                <button 
                                    className="btn" 
                                    id="next-btn"
                                    onClick={()=> this.saveChange()}
                                >Confirm</button>
                            ) : null
                    }
                    
                </div>
            
            </div>
            
        )
        
    }
}

export default withRouter(Footer) ;