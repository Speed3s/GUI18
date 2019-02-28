import React, {Component} from "react"
import cloudy from './Images/cloud.png';

class CloudComponent extends React.Component{

    render()
    {
        const CloudSize = {
            width: 80,
        }
        return(
            <div className="cloudycomponent">
              <h><img style= {CloudSize} src={cloudy} alt="cloudy" /></h>
            </div>
        )
    }
}


export default CloudComponent