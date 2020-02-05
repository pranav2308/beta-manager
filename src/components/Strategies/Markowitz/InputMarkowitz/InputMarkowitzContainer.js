import React from 'react';
import { onTickerListChange, onWindowLengthChange, onCapitalChange, onComputeButtonClick } from '../../Utils';
import InputMarkowitzView from './InputMarkowitzView';



class InputMarkowitz extends React.Component{
	
	constructor(){
		super();
		this.state = {
			tickerList : '',
			windowLength : 0,
			capital: 0
		}

		this.onTickerListChange = onTickerListChange.bind(this);
		this.onWindowLengthChange = onWindowLengthChange.bind(this);
		this.onCapitalChange = onCapitalChange.bind(this);
		this.onComputeButtonClick = onComputeButtonClick.bind(this);
	}





	render(){

		const {tickerList, windowLength, capital } = this.state;
		const { onTickerListChange, onWindowLengthChange, onCapitalChange, onComputeButtonClick } = this;
		
		return(
			<InputMarkowitzView 
				tickerList = {tickerList} 
				windowLength = {windowLength}
				capital = {capital}
				onTickerListChange = {onTickerListChange}
				onWindowLengthChange = {onWindowLengthChange}
				onCapitalChange = {onCapitalChange}
				onComputeButtonClick = {onComputeButtonClick}
			/>
  		);
	}

}

export default InputMarkowitz;