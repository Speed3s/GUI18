import React, {Component} from "react"
import './Home.css';


class SnowComponent extends React.Component{
    render(){
        return(
            <div class="snow-component">
                <div class="snow foreground"></div>
                <div class="snow foreground layered"></div>
                <div class="snow middleground"></div>
                <div class="snow middleground layered"></div>
                <div class="snow background"></div>
                <div class="snow background layered"></div>
            </div>
        )
    }
}







export default SnowComponent;