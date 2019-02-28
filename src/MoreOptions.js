import React, {Component} from "react"
import "./css/MoreOptions.css"
import { Link } from 'react-router-dom';
import './css/buttonstyle.css';


class MoreOptions extends Component {
    Click() {
        //GO TO NEXT PAGE + TRANSFER WEATHER DATA
      }
    constructor() {
        super()
        this.state = {
            temp: 18,
            min: "",
            max: "",
            region: "",
        }
        this.handleChange = this.handleChange.bind(this)
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
                    <p>Temperature {this.state.temp}</p>
                    <input 
                    value={this.state.temp} 
                    name="temp" 
                    onChange={this.handleChange}
                    type="range" min="-6" max="38"/>
                    <br></br>
                    <p>Chance of rain</p>
                    
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

                    <br></br><br></br>
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
