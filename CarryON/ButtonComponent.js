import React from "react"
import { Link } from 'react-router-dom';
import "./css/buttonstyle.css"


class ButtonComponent extends React.Component {
    render(){
        return(
            <div className="btn from-right">
                <Link to="./MoreOptions" onClick={()=>this.pushState('./MoreOptions')}>
                    More Options
                </Link>
            </div>
            
        )
    }
}

export default ButtonComponent