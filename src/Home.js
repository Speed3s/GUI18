import React, {Component} from 'react';
import snowy from './Snowy.png';
import sunny from './Sunny.png';
import rainy from './rainy.png';
import cloudy from './cloudy.png';
import './Home.css';

import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return(
      
        <div>
          
          <header className="App-header">
            <h><img src={snowy} alt="snowy" /></h>
            <h><img src={sunny} alt="sunny" /></h>
            <h><img src={rainy} alt="rainy" /></h>
            <h><img src={cloudy} alt="cloudy" /></h>
            <button> <Link to="./MoreOptions" onClick={()=>this.pushState('./MoreOptions')}>More Options</Link> </button>                
          </header>
          
        </div>
      
    );
  }
}

export default Home;
