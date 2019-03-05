import React from "react";
import "./css/ImageStyle.css";

const Api_Key = "8d2de98e089f1c28e1a22fc19a24ef04";

const I_STATE = {
    description: [],
    country: [],
    city: [],
    temperature: [],
    humidity : []
}

class SunnyComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = I_STATE;
    }
    
    async componentDidMount() {
        const listOfCities = [1856057, 6354943, 934047, 2643741, 2172517, 4072130, 4119617, 3333133, 3461786, 6535019, 596826, 2750888, 79657, 6542798, 3490446, 8222846, 5414872, 3648559, 1282028, 2735943, 3174725, 2147714, 1267254, 3616781, 1269320, 1701668, 1609350, 4887398, 588409, 7872009, 7873290, 6204696, 2878234, 5134453, 5814616, 3333229, 8223932]
        this.setState({ ...I_STATE });
       
        for(var i = 0; i < listOfCities.length; i++){ 
            const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=${listOfCities[i]}&appid=${Api_Key}&units=metric`);
            const res = await api_call.json();
            console.log(res);

            
            if(res.weather[0].main === "Clear"){
                this.setState(state => {
                    const description = [state.description, res.weather[0].description];
                    const country = [state.country, res.sys.country];
                    const city = [state.city, res.name];
                    const temperature = [state.temperature, res.main.temp];
                    const humidity = [state.humidity, res.main.humidity];
                    return {description, country, city, temperature, humidity};
                })
            }   
        }  
    }
    render(){
        
        return(
            <div >
                <div id="ImageWrap" >
                    <div id="ImageOuter">
                        <div>                                    
                            {(this.state.country || []).map( showCountries => (
                                <ul> {showCountries} </ul>
                            ))}
                        
                            {(this.state.city || []).map( showCity => (
                                <ul> {showCity} </ul>
                            ))} 

                            {(this.state.temperature || []).map( showTemperature => (
                                <ul> {showTemperature} </ul>
                            ))}  

                            {(this.state.humidity || []).map( showHumidity => (
                                <ul> {showHumidity} </ul>
                            ))}                           
                        </div>
                    </div>
                </div>  
            </div>
             
        )
    }
    
}


export default SunnyComponent