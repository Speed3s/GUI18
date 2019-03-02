import React, {Component} from "react"
import './css/Home.css';
import snowy from './Images/Snowy.png';

class SnowComponent extends React.Component{
    render(){
        const SnowSize = {
            width: 200,
            
        }
        const btn = {
            margin: "auto",
            display: "inline",
            
        }
        return(
            <div className="snowycomponent">
                <img class="weatherComp" style={SnowSize} src={snowy} alt="snowy" />
            </div>
        )
    }
}







export default SnowComponent;