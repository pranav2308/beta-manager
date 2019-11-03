import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import '../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import '../../../node_modules/bootstrap-css-only/css/bootstrap.min.css';
import '../../../node_modules/mdbreact/dist/css/mdb.css';

import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Dashboard from '../Dashboard/Dashboard';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Logout from '../Logout/Logout';
import './App.css';

class App extends React.Component{

  constructor(props){
    
    super(props);
    this.state = {
      userAuthenticated : false
    }
    this.authenticateUser = this.authenticateUser.bind(this);
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
          <Navbar userAuthenticated = {this.state.userAuthenticated}/> 
          <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route path = "/login" render = {(props) => <Login {...props} authenticateUser = {this.authenticateUser}/>}/>
            <Route path = "/register" render = {(props) => <Register {...props} authenticateUser = {this.authenticateUser}/>}/>
            <PrivateRoute path = "/dashboard" userAuthenticated = {this.state.userAuthenticated} component = {Dashboard} />
            <Route path = "/logout" render = {(props) => <Logout {...props} flushUser = {this.flushUser} component = {Home}/>}/>
          </Switch>
        </Router>
      </div>
    );  
  }
}

export default App;
