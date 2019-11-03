import React from "react";
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component : Component, userAuthenticated }) => {
	

	if(userAuthenticated){
		return <Route render = {(props) => <Component {...props}/>}/>
	}
	return <Redirect to = "/login"/>
}
export default PrivateRoute;