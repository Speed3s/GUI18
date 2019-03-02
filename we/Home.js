import React, {Component} from 'react';
import './css/Home.css';
import ImageComponents from "./ImageComponents";
import ButtonComponent from "./ButtonComponent";
import { async } from 'q';
import Weather from "./Weather"

const API = "8d2de98e089f1c28e1a22fc19a24ef04";

class Home extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    humidity: undefined, 
    description: undefined,
    error: undefined,
  }
  //get the weather when making the API call

  getWeather = async (e) => {

    const sunny = e.currentTarget.value;
    alert(sunny)
    e.preventDefault();   
  }

  render() {
    return(
      <div className="AppPage">
            <ImageComponents loadCountries={this.getWeather}/>
            <ButtonComponent />
           
      </div>
    )
  }
}

export default Home;
