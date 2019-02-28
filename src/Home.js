import React, {Component} from 'react';
import './css/Home.css';
import ImageComponents from "./ImageComponents";
import ButtonComponent from "./ButtonComponent";

class Home extends Component {
  render() {/*
    return(
      <div className="AppPage">
            <!-- <SnowComponent />
            <hr width="100%"/>
            <SunnyComponent />
            <hr width="100%"/>
            <RainComponent />
            <hr width="100%"/>
            <CloudComponent />
            <hr width="100%"/> -->
            <button> <Link to="./MoreOptions" onClick={()=>this.pushState('./MoreOptions')}>More Options</Link> </button>                 
        </div>
      
    );
    */
   
   
    return(
      <div className="AppPage">
            <ImageComponents />
            <ButtonComponent />
      </div>
    )
  }
}

export default Home;
