import React, {Component} from "react"
import sunny from './Images/Sunny.png';


class SunnyComponent extends React.Component{

    render(){
        return(
            <div className="sunnycomponent">
              <h><img src={sunny} alt="sunny" /></h>
            </div>
        )
    }
}

export default SunnyComponent