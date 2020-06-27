
function onTickerListChange(event){
	this.setState({ tickerList : event.target.value});
}

function onWindowLengthChange(event){
	this.setState( {windowLength : event.target.value});
}

function onCapitalChange(event, maskedValue, floatValue){
	this.setState({ capital : floatValue});
}

export { onTickerListChange, onWindowLengthChange, onCapitalChange };