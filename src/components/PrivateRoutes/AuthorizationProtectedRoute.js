import React from "react";
import { Route, Redirect } from 'react-router-dom';


const AuthorizationProtectedRoute = (props) => {
	
	const { component : Component, userAuthenticated } = props;
	
	if(userAuthenticated){
		return <Route render = {() => <Component {...props}/>}/>
	}
	return <Redirect to = "/login"/>
}
export default AuthorizationProtectedRoute;