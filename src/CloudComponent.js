import React, {Component} from "react"
import cloudy from './Images/cloudy.png';

class CloudComponent extends React.Component{

    render()
    {
        return(
            <div className="cloudycomponent">
              <h><img src={cloudy} alt="cloudy" /></h>
            </div>
        )
    }
}


export default CloudComponent