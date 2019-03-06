import React, {Component} from "react";



class FinalPage extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            
        }
    }
    render(){
        //const {text} = props.location.state;

        return(
            
            <div>     
                <h1>
                 {
                    this.props.location.temperature
                    &&
                    this.props.location.country
                 }   
                </h1>                               
                
            </div>
        )
    }
}



export default FinalPage;