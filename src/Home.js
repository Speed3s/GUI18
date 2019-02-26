import React, {Component} from 'react';
import './css/Home.css';
import SnowComponent from './SnowComponent';
import RainComponent from './RainComponent';
import { Link } from 'react-router-dom';
import SunnyComponent from './SunnyComponent';
import CloudComponent from './CloudComponent'

class Home extends Component {
  render() {
    return(
      <div className="AppPage">
            <SnowComponent />
            <hr width="100%"/>
            <SunnyComponent />
            <hr width="100%"/>
            <RainComponent />
            <hr width="100%"/>
            <CloudComponent />
            <hr width="100%"/>
            <button> <Link to="./MoreOptions" onClick={()=>this.pushState('./MoreOptions')}>More Options</Link> </button>                 
        </div>
      
    );
  }
}

export default Home;
