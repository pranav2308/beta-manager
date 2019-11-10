import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';


import '../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import '../../../node_modules/bootstrap-css-only/css/bootstrap.min.css';
import '../../../node_modules/mdbreact/dist/css/mdb.css';

import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Dashboard from '../Dashboard/Dashboard';
import InputIVS from '../Strategies/IVS/InputIVS';
import IVSVisualize from '../Strategies/IVS/IVSVisualize';
import InputMarkowitz from '../Strategies/Markowitz/InputMarkowitz';
import Logout from '../Logout/Logout';
import './App.css';

class App extends React.Component{

  constructor(props){
    
    super(props);
    this.state = {
      userAuthenticated : false
    }
  }

  authenticateUser = () => {
    if(!this.state.userAuthenticated){
      this.setState({ userAuthenticated : true });  
    }
  }

  flushUser = () => {
    if(this.state.userAuthenticated){
      this.setState({ userAuthenticated : false });  
    }
  }

  render(){
    return (
      <div>
        <Router>
          <Route /><Navbar userAuthenticated = {this.state.userAuthenticated}/> 
          <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route path = "/login" render = {(props) => <Login {...props} authenticateUser = {this.authenticateUser}/>}/>
            <Route path = "/register" render = {(props) => <Register {...props} authenticateUser = {this.authenticateUser}/>}/>
            <PrivateRoute exact path = "/dashboard" userAuthenticated = {this.state.userAuthenticated} component = {Dashboard} />
            <PrivateRoute exact path = "/dashboard/IVS" userAuthenticated = {this.state.userAuthenticated} component = {IVSVisualize} />
            <PrivateRoute exact path = "/dashboard/Markowitz" userAuthenticated = {this.state.userAuthenticated} component = {InputMarkowitz} />
            <Route exact path = "/logout" render = {(props) => <Logout {...props} flushUser = {this.flushUser} component = {Home}/>}/>
          </Switch>
        </Router>
      </div>
    );  
  }
}

export default App;
