import  React, { Component } from  'react';
import {Link} from 'react-router-dom'

// This is the back to activity url on the header
// Made this as an extra component for easier toggling

class BackToActivities extends Component { 

    
    render(){
        return (
            <Link 
                id="backtoactivity"  
                to='/'
                >Back To Activities</Link>
        )
    }

}

export default BackToActivities