import React, {Component} from "react"
import './css/Rain.css';
import rainy from './Images/rainy.png';


import "react-rain-animation/lib/style.css";

class RainComponent extends React.Component{

    render(){
        const RainSize = {
            width: 200,
           
            
        }
        return(
            <div className="rainycomponent">
                <h><img class="weatherComp" style= {RainSize} src={rainy} alt="rainy" /></h>
            </div>
            
        )
    }
}





export default RainComponent