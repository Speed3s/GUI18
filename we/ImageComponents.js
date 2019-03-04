import React, {Component} from "react";
import logo from "./Images/LoadScreen2.png"
import snowy from './Images/Snowy.png';
import rainy from './Images/rainy.png';
import cloudy from './Images/cloudy.png';
import sunny from './Images/Sunny.png';
import "./css/ImageStyle.css"
import { async } from "q";
import Weather from "./Weather.js"

const Api_Key = "8d2de98e089f1c28e1a22fc19a24ef04";
let arr = []
let arrtemp = []
let count = 0
class ImageComponent extends React.Component{
    
    state = {
        
        description: undefined,
        city: undefined,
        temperature: undefined,
        country: undefined,
        error: undefined

    }
    handleSubmit = async (e) => {
        const condition = e.currentTarget.value
        e.preventDefault();
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/find?lat=65.7&lon=45.5&cnt=10&appid=${Api_Key}`);
        const res = await api_call.json();
        console.log(res);
        
        if(condition){
            res.list.map((item, i) => {
                
                console.log(item.weather.map((subitem, i) => {
                    if(subitem.description === "clear sky" && condition === "sun")
                    {
                        this.setState({
                            
                            description: subitem.description,
                            temperature: item.main.temp,
                            city: item.name,
                            country: item.sys.country,
                            error: ""
                        })
                        arrtemp.push(item.main.temp);
                        arr.push(item.name);
                    }
                    else if(((subitem.description === "broken clouds") || (subitem.description === "few clouds") || (subitem.description === "scattered clouds")) && condition === "cloud")
                    {
                        this.setState({
                            description: subitem.description,
                            temperature: item.main.temp,
                            city: item.name,
                            country: item.sys.country,
                            error: ""
                        })
                        arrtemp.push(item.main.temp);
                        arr.push(item.name);
                    }
                    else if(subitem.description === "rain" && condition === "rain"){
                        this.setState({
                            description: subitem.description,
                            temperature: item.main.temp,
                            city: item.name,
                            country: item.sys.country,
                            error: ""
                        })
                        arrtemp.push(item.main.temp);
                        arr.push(item.name);
                    }
                    else if(subitem.description === " showerrain" && condition === "rain"){
                        this.setState({
                            description: subitem.description,
                            temperature: item.main.temp,
                            city: item.name,
                            country: item.sys.country,
                            error: ""
                        })
                        arrtemp.push(item.main.temp);
                        arr.push(item.name);
                    }
                    else if(subitem.description === "snow" && condition === "snow"){
                        this.setState({
                            description: subitem.description,
                            temperature: item.main.temp,
                            city: item.name,
                            country: item.sys.country,
                            error: ""
                        })
                        arrtemp.push(item.main.temp);
                        arr.push(item.name);
                    }
                }));
                
            });
            // if(res.list[0].weather[0].description === "clear sky" && condition === "sun")
            // {
            //     this.setState({
            //     description: res.list[0].weather[0].description,
            //     city: res.list[0].name,
            //     country: res.list[0].sys.country,
            //     error: ""
            //     })
            // }
            // else if(((res.list[0].weather[0].description === "broken clouds") || (res.weather[0].description === "few clouds") || (res.weather[0].description === "scattered clouds")) && condition === "cloud")
            // {
            //     this.setState({
            //         description: res.list[0].weather[0].description,
            //         city: res.list[0].name,
            //         country: res.list[0].sys.country,
            //         error: ""
            //         })
            // }
            // else if(res.list[0].weather[0].description === "rain" && condition === "rain"){
            //     this.setState({
            //         description: res.weather[0].description,
            //         city: res.list[0].name,
            //         country: res.list[0].sys.country,
            //         error: ""
            //         })
            // }
            // else if(res.list[0].weather[0].description === " showerrain" && condition === "rain"){
            //     this.setState({
            //         description: res.list[0].weather[0].description,
            //         city: res.list[0].name,
            //         country: res.list[0].sys.country,
            //         error: ""
            //         })
            // }
            // else if(res.list[0].weather[0].description === "snow" && condition === "snow"){
            //     this.setState({
            //         description: res.list[0].weather[0].description,
            //         city: res.list[0].name,
            //         country: res.list[0].sys.country,
            //         error: ""
            //         })
            // }
            console.log(arr)
        }
        else{
            this.setState({
                error: "Nothing was clicked!"
            })
        }
        
        
    }
    
    render(){
        const Size = {
            width: 200,
        }
        
        return(
            <div className="fullcontainer">
            <div className="container">
                {/* <img className="Logo" src={logo} alt="Logo" />
                <div className="HeaderOuter">
                    <div className="HeaderWrapper1">
                            <p>Weather-to-go</p>
                    </div>
                </div> */}
                        <div className="row">
                            <div className="col-25">
                                <button className="btn" onClick={this.handleSubmit} name="snow" value = "snow"><img className="weatherComp" style={Size} src={snowy} alt="snowy"/></button>
                            </div>
                        </div>

                        <div className="row">
                                <div className="col-25">
                                    <button className="btn" onClick={this.handleSubmit} name="rain" value = "rain" ><img className="weatherComp" style= {Size} src={rainy} alt="rainy" /></button>
                                </div>
                        </div>

                        <div className="row">
                            <div className="col-25">
                                <button className="btn" onClick={this.handleSubmit} name="cloud" value = "cloud"><img className="weatherComp" style= {Size} src={cloudy} alt="cloudy" /></button>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-25">
                                <button className="btn" onClick={this.handleSubmit} name="sun" value = "sun"><img className="weatherComp" style={Size} src={sunny} alt="sunny"/></button>
                            </div>
                        </div>
                </div>
                <div className="container2">
                    <div><Weather 
                    
                    count = {arr.length}
                    cities={arr} 
                    temp = {arrtemp}
                    
                    /></div>
                </div>
            </div>
             
        )
    }
    
}


export default ImageComponent