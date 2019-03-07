import React from "react"
import { Link } from 'react-router-dom';
import "./css/buttonstyle.css"


class ButtonComponent extends React.Component {
    render(){
        const btnstyle = {
            position: "relative",
            left: 0,
            top: -150,
            
        }
        return(
            <div className="btn from-right" style={btnstyle}>
                <Link to="./MoreOptions" onClick={()=>this.pushState('./MoreOptions')}>
                    More Options
                </Link>
            </div>
            
        )
    }
}

export default ButtonComponent