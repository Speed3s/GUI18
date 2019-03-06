import React, {Component} from "react"
import "./css/MoreOptions.css"
import { Link } from 'react-router-dom';
import './css/buttonstyle.css';
class MoreOptions extends React.Component {
    constructor() {
        super()
        this.state = {
            temp: 18,
            country: "",
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
    HandleSubmit(e){
        e.preventDefault();
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
				   <p>Humidity</p>
                    
                    <select 
                        value={this.state.min} 
                        name="min" 
                        onChange={this.handleChange}
                    >
                        <option value="">No Min</option>
                        <option value="0">0%</option>
                        <option value="20">20%</option>
                        <option value="40">40%</option>
                        <option value="60">60%</option>
                        <option value="80">80%</option>
                    </select>

                    <select 
                        value={this.state.max} 
                        name="max" 
                        onChange={this.handleChange}
                    >
                        <option value="">No Max</option>
                        <option value="20">20%</option>
                        <option value="40">40%</option>
                        <option value="60">60%</option>
                        <option value="80">80%</option>
                        <option value="100">100%</option>
                    </select>
				   
                   <br></br>
                    <p>Country</p>
                    <select 
                        value={this.state.region} 
                        name="region" 
                        onChange={this.handleChange}
                    >
						<option>-</option>
                        <option value="AR">Argentina</option>
                        <option value="AU">Australia</option>
                        <option value="AT">Austria</option>
                        <option value="BD">Bangladesh</option>
                        <option value="BE">Belgium</option>
                        <option value="BR">Brazil</option>
						<option value="CA">Canada</option>
                        <option value="CN">China</option>
                        <option value="CR">Costa Rica</option>
                        <option value="CZ">Czech Republic</option>
                        <option value="DK">Denmark</option>
                        <option value="EG">Egypt</option>
						<option value="FJ">Fiji</option>
                        <option value="GR">Greece</option>
                        <option value="IT">Italy</option>
                        <option value="JP">Japan</option>
                        <option value="KR">Korea, South</option>
                        <option value="MG">Madagascar</option>
						<option value="MU">Mauritius</option>
                        <option value="MA">Morocco</option>
                        <option value="NZ">New Zealand</option>
                        <option value="NL">Netherlands</option>
                        <option value="SO">Somalia</option>
                        <option value="TR">Turkey</option>
						<option value="AE">United Arab Emirates</option>
						<option value="GB">United Kingdom</option>
                        <option value="US">United States</option>
                        <option value="VA">Vatican City</option>
                        <option value="ZW">Zimbabwe</option>    
                    </select>
					
                    <br></br><br></br>
                    <div>
                        <div className="btn from-right"><Link to={{pathname: '/FinalPage', temperature: this.state.temp, country: this.state.region}}>Let's Go</Link></div>
                        
                    </div>
                </form>
            </main>
        )
    
    }
}

export default MoreOptions;
