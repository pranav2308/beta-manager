function isTickerListEmpty(tickerList){
	return (!Boolean(tickerList.length));
}

function isTickerListValid(tickerList){
	let reg = new RegExp('[A-Za-z]+$');
	return reg.test(tickerList);
}

function isWindowLengthValid(windowLength){
	let reg = new RegExp('^[0-9]+$');
	return reg.test(windowLength);
}

function isWindowLengthPositive(windowLength){
	return (Number(windowLength) > 0);
}

function isCapitalValid(capital){
	const capitalInNumber = new Number(capital);
	if(capitalInNumber > 0){
		return true;
	}
	return false;
}


function isInputFormValid(tickerList, windowLength, capital){
	
	if(isTickerListEmpty(tickerList)){
		alert('Your ticker list cannot be empty! Please check and try again.')
		return false;
	}
	if(!isTickerListValid(tickerList)){
		alert('Your list of ticker symbols is not valid! Please check and enter again.');
		return false;
	}
	if(!isWindowLengthValid(windowLength)){
		alert('Your window length should be a positive whole number! Please check and enter again.');
		return false;
	}
	if(!isWindowLengthPositive(windowLength)){
		alert('Your window length cannot be 0! Please check and enter again.');
		return false;
	}
	if(!isCapitalValid(capital)){
		alert('Available capital has to be more than 0! Please check and enter again.');
		return false;
	}

	return true;
}

export default isInputFormValid;