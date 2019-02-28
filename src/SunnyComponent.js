import React, {Component} from "react"
import sunny from './Images/sun.png';


class SunnyComponent extends React.Component{

    render(){
        const SunSize = {
            width: 80,
        }
        return(
            <div className="sunnycomponent">
              <h><img style= {SunSize}src={sunny} alt="sunny" /></h>
            </div>
        )
    }
}

export default SunnyComponent