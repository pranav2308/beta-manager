import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import '../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import '../../../node_modules/bootstrap-css-only/css/bootstrap.min.css';
import '../../../node_modules/mdbreact/dist/css/mdb.css';

import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Register from '../Register/Register';
import Login from '../Login/Login';
import './App.css';

function App() {
  return (
  	<div>
  		<Router>
  			<Navbar/> 
  			<Switch>
  				<Route exact path = "/" component = {Home}/>
  				<Route path = "/login" component = {Login}/>
  				<Route path = "/register" component = {Register}/>
  			</Switch>
	    </Router>
	</div>
  );
}

export default App;
