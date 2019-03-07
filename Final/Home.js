import React, {Component} from 'react';
import './css/Home.css';
import ImageComponents from "./ImageComponents";
import ButtonComponent from "./ButtonComponent";
import Background from "./Images/back.jpg"

class Home extends Component {
  
  render() {
      
    return(
      <div className="AppPage">
            <ImageComponents />
            <ButtonComponent className ="MOButton" />
      </div>
    )
  }
}

export default Home;
