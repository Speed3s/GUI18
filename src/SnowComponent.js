import React, {Component} from "react"
import './css/Home.css';
import snowy from './Images/snow.png';

class SnowComponent extends React.Component{
    render(){
        const SnowSize = {
            width: 80,
            
        }
        return(
            <div className="snowycomponent">
                <h><img style={SnowSize} src={snowy} alt="snowy" /></h>
            </div>
        )
    }
}







export default SnowComponent;