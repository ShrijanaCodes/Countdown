import React, { Component } from 'react';
import './App.css';
class App extends Component{
	constructor(props){
			super(props);
			this.state = {
				deadline: 'December 25, 2017',
				newDeadline: ''
			}
		}

		changeDeadline(){
			this.setState({deadline: this.state.newDeadline});
		}
	render(){
		
	return(
	<div> 
		<div className = "App"> 
		<div className = "App Title">
		Countdown to {this.state.deadline} </div>
		<div>
		   <div>15 Days</div>
		   <div>30 Hours</div>
		   <div>15 Minutes</div>
		   <div>20 Seconds</div>

		</div>
		<div>
		<input placeholder = 'new date'
		onChange ={event => this.setState({newDeadline: event.target.value})}/>
		<button onClick={() => this.changeDeadline()}>Submit</button>
		</div>
	 </div>
	 </div>
	)
	}
}

export default App;
