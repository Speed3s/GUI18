import React, {Component} from "react"
import "./css/MoreOptions.css"
import { Link } from 'react-router-dom';
import './css/buttonstyle.css';
class MoreOptions extends React.Component {
    constructor() {
        super()
        this.state = {
            temp: 18,
            region: "",
            celcius: true,
            unit: "C",
            minTemp: -6,
            maxTemp: 38,
        }
        this.handleChange = this.handleChange.bind(this)
        this.changeUnit = this.changeUnit.bind(this)
    }
    changeUnit(){
        const celcius = this.state.celcius;
        if(celcius){
            this.setState({
                celcius: false,
                unit: "F",
                temp: (this.state.temp*9/5) +32,
                minTemp: 21,
                maxTemp: 100
            });
        }else{
            this.setState({
                celcius: true,
                unit: "C",
                temp: (this.state.temp-32)*5/9,
                minTemp: -6,
                maxTemp: 38
            });
        }
    }
    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? 
            this.setState({
                [name]: checked
            })
        :
        this.setState({
            [name]: value
        }) 
    }
    render() {
        return (
            <main>
                <form>
                    
                    <br></br>
                    <a onClick={this.changeUnit}> C|F</a>
                    <p>Temperature {Math.round(this.state.temp)}°{this.state.unit}</p>
                    
                    <input 
                    value={this.state.temp} 
                    name="temp" 
                    onChange={this.handleChange}
                    type="range" 
                    min = {this.state.minTemp}  
                    max = {this.state.maxTemp}/>

                   <br></br>
                    <p>Region</p>
                    <select 
                        value={this.state.region} 
                        name="region" 
                        onChange={this.handleChange}
                    >
                        <option value="europe">Europe</option>
                        <option value="samerica">South America</option>
                        <option value="namerica">North America</option>
                        <option value="africa">Africa</option>
                        <option value="oceania">Oceania</option>
                        <option value="asia">Asia</option>
                    </select>
                    <br></br><br></br>
                    <div>
                        <div className="btn from-right"><Link to="./FinalPage" onClick={()=>this.pushState('./FinalPage')}>Let's Go</Link></div>
                    </div>
                </form>
            </main>
        )
    
    }
}

export default MoreOptions;
