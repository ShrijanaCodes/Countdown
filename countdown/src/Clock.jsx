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
 	getTimeTill(deadline) {
 		const time = Date.parse(deadline) - Date.parse(new Date());
 		console.log('time', time);
 		const seconds = Math.floor((time/1000)%60);
 		const minutes = Math.floor((time/1000/60)%60);
		const hours = Math.floor(time/(1000*60*60) %24);
		const days = Math.floor(time/(1000*60*60*24));
		console.log('seconds', seconds, 'minutes', minutes, 'hours', hours, 'days', days);
 	}
	render() {
		this.getTimeTill(this.props.deadline);
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