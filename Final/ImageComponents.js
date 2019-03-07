import React from "react";
import { Link } from 'react-router-dom';
import snowy from './Images/Snowy.png';
import rainy from './Images/rainy.png';
import cloudy from './Images/cloudy.png';
import sunny from './Images/Sunny.png';
import "./css/ImageStyle.css";
import Background from "./Images/back.jpg";

class ImageComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            snowCol: "white",
            rainCol: "grey",
            cloudCol: "skyblue",
        }
    }
    render(){
        const Size = {
            width: 250, 
        }
        
        return(
            <div>
                
                <div id="ImageWrap" >
                    <div id="ImageOuter">

                        <div id="ImageWrapper1">
                            <Link to={{pathname: './SnowComponent', colour: this.state.snowCol}} className="btn" >
                                <img className="weatherComp" style={Size} src={snowy} alt="snowy" />
                            </Link>
                        </div>

                        <div id="ImageWrapper2">
                            <Link to="./RainComponent" className="btn" onClick={()=>this.pushState('./RainComponent')}>
                                <img className="weatherComp" style={Size} src={rainy} alt="rainy"/>
                            </Link>
                        </div>

                        <div id="ImageWrapper3">
                            <Link to="./CloudComponent" className="btn" onClick={()=>this.pushState('./CloudComponent')}>
                                <img className="weatherComp" style={Size} src={cloudy} alt="cloudy"/>
                            </Link>
                        </div>

                        <div id="ImageWrapper4">
                            <Link to="./SunnyComponent" className="btn" onClick={()=>this.pushState('./SunnyComponent')}>
                                <img className="weatherComp" style={Size} src={sunny} alt="sunny"/>
                            </Link>
                        </div>             
                    </div>
                </div>  
            </div>
             
        )
    }
    
}


export default ImageComponent