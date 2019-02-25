import  React, { Component } from  'react';
import {Link} from 'react-router-dom'
import Confirm from './Confirm'
import ApiService from '../api/ApiService'

const apiService = new ApiService();
class Home extends Component {
    state = {states: {data: []}}
    
    componentDidMount(){
        apiService.getActivities().then((result)=> {this.setState({states : result}); console.log(this.state)})
    }
    render (){
        return (
            <div className="body">
                <Link to="/activity">Create Activity</Link>
                {this.state.states.data.map((s, index)=> s.address !== null ? <Confirm key={index} state={s} e  /> : false ) }
            </div>
        )
    }
}

export default Home