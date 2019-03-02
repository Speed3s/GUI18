import React, {Component} from "react"
import sunny from './Images/Sunny.png';


class SunnyComponent extends React.Component{

    render(){
        const SunSize = {
            width: 200,
        }
        return(
            <div className="sunnycomponent">
              <h><img class="weatherComp" style={SunSize} src={sunny} alt="sunny" /></h>
            </div>
        )
    }
}

export default SunnyComponent