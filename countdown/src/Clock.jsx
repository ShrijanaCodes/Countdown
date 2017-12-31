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

  componentWillMount() {
  	this.getTimeTill(this.props.deadline);
  }

  componentDidMount() {
  	setInterval(() => this.getTimeTill(this.props.deadline), 1000);
  }

  leading0(num) {
 	return num < 10 ? '0' + num : num;
  }

 	getTimeTill(deadline) {
 		const time = Date.parse(deadline) - Date.parse(new Date());
 		console.log('time', time);
 		const seconds = Math.floor((time/1000)%60);
 		const minutes = Math.floor((time/1000/60)%60);
		const hours = Math.floor(time/(1000*60*60) %24);
		const days = Math.floor(time/(1000*60*60*24));
 		this.setState({days, hours, minutes, seconds});
 	}
	render() {
		
	 return (
		<div>
		   <div className= "days">{this.leading0(this.state.days)} Days</div>
		   <div className= "hours">{this.leading0(this.state.hours)} Hours</div>
		   <div className= "min">{this.leading0(this.state.minutes)} Minutes</div>
		   <div className= "sec">{this.leading0(this.state.seconds)} Seconds</div>
		</div>
		)

	}

}

export default Clock;