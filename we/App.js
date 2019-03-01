import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "c7ae423a7c630500b1b931de454a38a8";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
  }
  getWeather = async (e) => {
    e.preventDefault();
  
    const rain = e.target.elements.rain;
    const snow = e.target.elements.snow;
    const clouds = e.target.elements.clouds;
    const sunny = e.target.elements.wind;
    

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${rain},${snow},${clouds},${sunny}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if (rain || snow || clouds || sunny) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
      });
    }
  }


  render() {
    return (
      
      <div>
        <div >
          <Titles />
        </div>
        <div>
          <Form getWeather={this.getWeather} />
          <Weather 
            temperature={this.state.temperature} 
            humidity={this.state.humidity}
            city={this.state.city}
            country={this.state.country}
            description={this.state.description}
          />
        </div>
      </div>
 
      
    );
  }
};

export default App;