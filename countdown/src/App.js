import React, { Component } from 'react';
import './App.css';

class App extends Component{
	render(){
	return(
	<div> 
		<div className = "App"> 
		<div className = "App Title">Countdown to January 1, 2018 </div>
		<div>
		   <div>15 Days</div>
		   <div>30 Hours</div>
		   <div>15 Minutes</div>
		   <div>20 Seconds</div>

		</div>
		<div>
		<input placeholder = 'new date'/>
		<button>Submit</button>
		</div>
	 </div>
	 </div>
	)
	}
}

export default App;