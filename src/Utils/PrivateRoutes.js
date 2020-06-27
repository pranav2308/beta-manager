import React from "react";
import { Route, Redirect } from 'react-router-dom';


const AuthorizationProtectedRoute = (props) => {
	/*
	* If the user is signed in then return the component
	* Else redirect the user to log-in page.
	*/
	const { component : Component, userAuthenticated } = props;
	
	if(userAuthenticated){
		return <Route render = {(routeProps) => <Component {...routeProps} {...props}/>}/>
	}
	return <Redirect to = "/login"/>
}


export { AuthorizationProtectedRoute };