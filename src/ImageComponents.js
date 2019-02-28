import React, {Component} from "react";
import logo from "./Images/LoadScreen2.png"
import SnowComponent from "./SnowComponent";
import SunnyComponent from "./SunnyComponent";
import RainComponent from "./RainComponent";
import CloudComponent from "./CloudComponent";
import "./css/ImageStyle.css"

class ImageComponent extends React.Component {
    render(){
        return(
            <section>
                <img className="Logo" src={logo} alt="Logo" />
                
                <div className="HeaderOuter">
                    <div className="HeaderWrapper1">
                            <p>Weather-to-go</p>
                    </div>
                    <div className="HeaderWrapper">
                        <p id="header">Current Conditions</p>
                    </div> 
                </div>
                

                <div id="ImageWrap" >
                    <div id="ImageOuter">
                        <div id="ImageWrapper">
                            <SnowComponent />
                        </div>
                        <div id="ImageWrapper">
                            <SunnyComponent />     
                        </div>
                        <div id="ImageWrapper">
                            <RainComponent />
                            
                        </div>
                        <div id="ImageWrapper">
                            <CloudComponent /> 
                        </div>
                    </div>

                    <div classNam="textWrap" >
                        <div className="textOuter">
                            <div className="textWrapper">
                                <p>Snowy</p>
                            </div>
                            <div className="textWrapper">
                                <p>Sunny</p>
                            </div>
                            <div className="textWrapper">
                                <p>Rainy</p>
                            </div>
                            <div className="textWrapper">
                                <p>Cloudy</p>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
        )
    }
}


export default ImageComponent