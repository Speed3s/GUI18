import React, {Component} from "react"
import cloudy from './Images/cloudy.png';

class CloudComponent extends React.Component{

    render()
    {
        const CloudSize = {
            width: 200,
        }
        return(
            <div className="cloudycomponent">
              <h><img class="weatherComp" style= {CloudSize} src={cloudy} alt="cloudy" /></h>
            </div>
        )
    }
}


export default CloudComponent