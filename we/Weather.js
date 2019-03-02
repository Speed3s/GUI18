import React from "react";


class Weather extends React.Component{
	render(){
		return(
			<div>
				{this.props.description}
				console.log(this.props.description)
			</div>
		)
	}
}



export default Weather

