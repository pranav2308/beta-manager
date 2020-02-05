import React from 'react';
import { onTickerListChange, onWindowLengthChange, onCapitalChange, onComputeButtonClick } from '../../Utils';
import InputIVSView from './InputIVSView';



class InputIVS extends React.Component{
	
	constructor(props){
		super(props);
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

		const { tickerList, windowLength, capital } = this.state;
		const { onTickerListChange, onWindowLengthChange, onCapitalChange, onComputeButtonClick } = this;
		
		return(
			<InputIVSView 
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

export default InputIVS;