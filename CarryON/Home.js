import React, {Component} from 'react';
import './css/Home.css';
import ImageComponents from "./ImageComponents";
import ButtonComponent from "./ButtonComponent";


class Home extends Component {
  
  render() {
    return(
      <div className="AppPage">
            <ImageComponents />
            <ButtonComponent class ="MOButton" />
           
      </div>
    )
  }
}

export default Home;
