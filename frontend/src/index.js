/*
This app integrates with django backend server, 
The idea is it will save the initial form data in the state
After confirming the form the data is dynamically added to the database
*/


import React from 'react';
import { render } from 'react-dom'
import './App.css';
import App from './App';

import * as serviceWorker from './serviceWorker';


render( <App />, document.getElementById('root') )


serviceWorker.unregister();
