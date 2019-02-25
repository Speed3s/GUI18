import React, {Component} from 'react';
import snowy from './Snowy.png';
import sunny from './Sunny.png';
import rainy from './rainy.png';
import cloudy from './cloudy.png';
import './Home.css';
import SnowComponent from './SnowComponent';
import RainComponent from './RainComponent';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return(
      <div className="AppPage">
          
            <div className="snowycomponent">
              <SnowComponent />
                <h><img src={snowy} alt="snowy" /></h>
            </div>
            <hr width="100%"/>
            <div className="sunnycomponent">
              <h><img src={sunny} alt="sunny" /></h>
            </div>
            <hr width="100%"/>
            <div className="rainycomponent">
              <RainComponent />
              <h><img src={rainy} alt="rainy" /></h>
            </div>
            <hr width="100%"/>
            <div className="cloudycomponent">
              <h><img src={cloudy} alt="cloudy" /></h>
            </div>
            <hr width="100%"/>
              <button> <Link to="./MoreOptions" onClick={()=>this.pushState('./MoreOptions')}>More Options</Link> </button>                
        
          
        </div>
      
    );
  }
}

export default Home;
