import React from "react";
import { Route, Redirect } from 'react-router-dom';

const InputProtectedRoute = (props) => {

	const { component : Component, inputsDefined, fallBackRoute } = props;
	if(inputsDefined){
		return <Route render = {(routeProps) => <Component {...routeProps} {...props}/>}/>
	}
	return <Redirect to = {fallBackRoute}/>
}

export default InputProtectedRoute;