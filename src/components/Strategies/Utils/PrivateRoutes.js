import React from "react";
import { Route, Redirect } from 'react-router-dom';


function InputProtectedRoute(props){
	/*
	* If the user have inserted valid inputs on the form then return the compoent.
	* else redirect to fallBackroute. 
	*/
	const { component : Component, inputsDefined, fallBackRoute } = props;
	if(inputsDefined){
		return <Route render = {(routeProps) => <Component {...routeProps} {...props}/>}/>
	}
	return <Redirect to = {fallBackRoute}/>
}

function redirectProcessing(allocationStatus, url, flushInputAndAllocation, strategy){
	
	/*
	* If the server-api return valid allocation then redirect to visulizaton page.
	* If allocation is invalid or erros is generated then display alert and reditrect to input page. 
	*/

	if(allocationStatus === 'valid'){
		const newUrl = url.split('/').slice(0, -1).join('/').concat('/', strategy,'Visualize');
		return <Redirect to = {newUrl}/>
	}
	else if(allocationStatus === 'invalid'){
		alert('Seems like you made a mistake in writing ticker symbols. Please read the instructions and try again.');
		const newUrl = url.split('/').slice(0, -1).join('/').concat('/Input', strategy);
		flushInputAndAllocation();
		return <Redirect to = {newUrl}/>
	}
	else if(allocationStatus === 'error'){
		alert('Oops! Something went wrong on our server. Try loggin-in another time.');
		flushInputAndAllocation();
		const newUrl = url.split('/').slice(0, -1).join('/').concat('/Input', strategy);
		return <Redirect to = {newUrl}/>
	}

}

export { InputProtectedRoute, redirectProcessing };