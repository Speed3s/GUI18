import React, { Component } from 'react';
import snowy from './Snowy.png';
import sunny from './Sunny.png';
import rainy from './rainy.png';
import styles from './index.css';
import cloudy from './cloudy.png';
import './Home.css';

class App extends Component {

  
    Click() {
      //GO TO NEXT PAGE + TRANSFER WEATHER DATA
    }

    moreOptions() {
      //GO TO NEXT PAGE + TRANSFER WEATHER DATA
    }
    
    render() {
    return(
        <div>
        <header className="App-header">
          <a href onClick={this.Click}><img src={snowy} alt="snowy" /></a>
          <a href onClick={this.Click}><img src={sunny} alt="sunny" /></a>
          <a href onClick={this.Click}><img src={rainy} alt="rainy" /></a>
          <a href onClick={this.Click}><img src={cloudy} alt="cloudy" /></a>
          <p>Hey there</p>
          <a href onClick={this.moreOptions}>More Options</a>     
        </header>
        </div>
    );
  }
}

export default App;
