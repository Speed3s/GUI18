import React, { Component } from 'react';
import snowy from './Snowy.png';
import sunny from './Sunny.png';
import rainy from './rainy.png';
import cloudy from './cloudy.png';
import './Home.css';

import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

import MoreOptions from "./MoreOptions.js";

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          
          <header className="App-header">
            <h><img src={snowy} alt="snowy" /></h>
            <h><img src={sunny} alt="sunny" /></h>
            <h><img src={rainy} alt="rainy" /></h>
            <h><img src={cloudy} alt="cloudy" /></h>
            <h> <NavLink to="/MoreOptions">More Options</NavLink>  </h>                
          </header>
           
          <header className="App-header">
          <Switch>
          <Route path="/MoreOptions" component={MoreOptions} />
          </Switch>
          </header>
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
