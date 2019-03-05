import React, {Component} from "react";
import ImageComponent from './ImageComponents';


class FinalPage extends Component{
    
    
    handleSubmit(){}
    
    render(){
        return(
            <div>                                    
                {(ImageComponent.state.country || []).map( showCountries => (
                    <ul> {showCountries} </ul>
                ))}
            
                {(ImageComponent.state.city || []).map( showCity => (
                    <ul> {showCity} </ul>
                ))} 

                {(ImageComponent.state.temperature || []).map( showTemperature => (
                    <ul> {showTemperature} </ul>
                ))}  

                {(ImageComponent.state.humidity || []).map( showHumidity => (
                    <ul> {showHumidity} </ul>
                ))}                           

            </div>
        )
    }
}



export default FinalPage;