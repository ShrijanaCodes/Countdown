import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
 constructor(props) {
 	super(props);
 	this.state = {
 		days: 0,
 		hours: 0,
 		minutes: 0,
 		seconds: 0
 	}
 }
	render() {
	 return (
		<div>
		   <div className= "days">{this.state.days} Days</div>
		   <div className= "hours">{this.state.hours} Hours</div>
		   <div className= "min">{this.state.minutes} Minutes</div>
		   <div className= "sec">{this.state.seconds} Seconds</div>
		</div>
		)

	}

}

export default Clock;