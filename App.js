import React, { Component } from 'react';
import './App.css';

class App extends Component{
	render(){
	return(
	<div> 
		<div className = "App"> Countdown to January 1, 2018 
		<div>
		   <div className = "days">15 Days</div>
		   <div className= "hours">30 Hours</div>
		   <div className = "min">15 Minutes</div>
		   <div className = "sec">20 Seconds</div>

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