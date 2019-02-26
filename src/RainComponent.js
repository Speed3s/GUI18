import React, {Component} from "react"
import './css/Rain.css';
import rainy from './Images/rainy.png';


import "react-rain-animation/lib/style.css";

class RainComponent extends React.Component{

    render(){
        return(
            <div className="rainycomponent">
                <div class="rain-component">
                    <div class="rain foreground"></div>
                    <div class="rain foreground layered"></div>
                    <div class="rain middleground"></div>
                    <div class="rain middleground layered"></div>
                    <div class="rain background"></div>
                    <div class="rain background layered"></div>
                </div>
                <h><img src={rainy} alt="rainy" /></h>
            </div>
            
        )
    }
}





export default RainComponent