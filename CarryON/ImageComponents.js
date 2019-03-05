import React from "react";
import { Link } from 'react-router-dom';
import snowy from './Images/Snowy.png';
import rainy from './Images/rainy.png';
import cloudy from './Images/cloudy.png';
import sunny from './Images/Sunny.png';
import "./css/ImageStyle.css";


class ImageComponent extends React.Component{
        
    render(){
        const Size = {
            width: 200, 
        }
        return(
            <div>
                <div id="ImageWrap" >
                    <div id="ImageOuter">

                        <div id="ImageWrapper1">
                            <Link to="./SnowComponent" className="btn" onClick={()=>this.pushState('./SnowComponent')}>
                                <img className="weatherComp" style={Size} src={snowy} alt="snowy"/>
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