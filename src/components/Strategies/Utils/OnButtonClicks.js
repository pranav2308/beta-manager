import React from 'react';

function fetchResponse(responseHeader){
	if(responseHeader.status === 200){
		return responseHeader.json();  
	}
	else if(responseHeader.status === 406){
		// alert('Invalid inputs! Please try again.')
		return 'invalid';
	}
	else{
		//if rsposne.status === 500
		//alert('Oops! Something went wrong on our server. Try loggin-in another time.');
		return 'error'
	}
}

function processResponse(response, collectAllocation, capital){
	if(response === 'invalid'){
		collectAllocation('invalid', 'NotDefined', 'NotDefined');
	}
	else if(response === 'error'){
		collectAllocation('error', 'NotDefined', 'NotDefined');
	}
	else{
		collectAllocation('valid', response, capital);
	}
}

function processError(error, push){
	alert('Whoa! Something just broke on our side. Please login and enter the inputs again');
	push('/');
}

function onComputeButtonClick(strategy){
	
	//Input validation completed.

	this.props.defineInputs();
	
	//process input
	const upperCaseList = this.state.tickerList.toUpperCase();
	const commaSepTickerList = upperCaseList.split(' ').join('');
	this.setState( { tickerList: commaSepTickerList });

	//call processing page till the result arrives.

	const url  = this.props.location.pathname;
	const newUrl = url.split('/').slice(0, -1).join('/').concat('/', strategy, 'Processing')
	this.props.history.push(newUrl);

	const { windowLength, capital } = this.state;
	const { email } = this.props.user;
	const { collectAllocation } = this.props;
	const { push } = this.props.history;

	fetch('http://localhost:3000/'.concat(strategy), {
      method: 'post',
      headers : {'Content-Type' : 'application/json'},
      body : JSON.stringify({
        email : email,
        tickerList : commaSepTickerList,
        windowLength : windowLength,
        capital : capital
      })
    })
    .then(fetchResponse)
    .then(response => {
    	processResponse(response, collectAllocation, capital);
    })
    .catch(error => {
    	processError(error, push);
    });
}

function onProceedButtonClick(url, push, strategy){
	push(url.concat('/Input', strategy));
}

function onReturnToDashboardButtonClick(flushInputAndAllocation, push){
	flushInputAndAllocation();
	push('/dashboard');
}

function onTryAnotherInputButtonClick(flushInputAndAllocation, url, strategy, push){
	flushInputAndAllocation();
	const newUrl = url.split('/').slice(0, -1).join('/').concat('/Input', strategy);
	push(newUrl);	
}

export { onComputeButtonClick, onProceedButtonClick, onReturnToDashboardButtonClick, onTryAnotherInputButtonClick };