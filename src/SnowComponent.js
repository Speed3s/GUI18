import React, {Component} from "react"
import './css/Home.css';
import snowy from './Images/Snowy.png';

class SnowComponent extends React.Component{
    render(){
        return(
            <div className="snowycomponent">
                <div class="snow-component">
                    <div class="snow foreground"></div>
                    <div class="snow foreground layered"></div>
                    <div class="snow middleground"></div>
                    <div class="snow middleground layered"></div>
                    <div class="snow background"></div>
                    <div class="snow background layered"></div>
                </div>
                <h><img src={snowy} alt="snowy" /></h>
            </div>
        )
    }
}







export default SnowComponent;