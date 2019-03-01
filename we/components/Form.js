import React from "react";

const Form = props => (
	<form onSubmit={props.getWeather}>
		<input type="text" name="rain" placeholder="Testing...type in rain"/>
		<button>Get Weather</button>
	</form>
);

export default Form;