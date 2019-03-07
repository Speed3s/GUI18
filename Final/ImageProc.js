import React, {Component} from "react"
import LoadScreen from './Images/LoadScreen.png';
import { Link, Redirect } from 'react-router-dom';
import './css/Home.css';

class ImageProc extends React.Component{
    constructor(props)
    {
        super(props);

        this.state ={
            render: false     
          };
    }
    componentDidMount(){
        setTimeout(function(){
            this.setState({render: true})
        }.bind(this), 3000)
    }
    render(){
        const ImageStyle = {
            height: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }
        let renderContainer = false
        if(!this.state.render){
            renderContainer = <div> <div class="ImageCl">
            
            <img style= {ImageStyle} src={LoadScreen} alt="LoadScreen" />
            
        </div></div> //Add dom elements
        }
        else
        {
            renderContainer = <Redirect to="./Home" />
            // <Link to="./MoreOptions" onClick={()=>this.pushState('./MoreOptions')}>More Options</Link>
        }
        return(
            renderContainer
        )
    }
}


export default ImageProc