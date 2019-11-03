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
    this.setState({userAuthenticated : true});
    
  }

  render(){
    return (
      <div>
        <Router>
          <Navbar/> 
          <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route path = "/login" render = {(props) => <Login {...props} authenticateUser = {this.authenticateUser}/>}/>
            <Route path = "/register" render = {(props) => <Register {...props} authenticateUser = {this.authenticateUser}/>}/>
            <PrivateRoute path = "/dashboard" userAuthenticated = {this.state.userAuthenticated} component = {Dashboard} />
          </Switch>
        </Router>
      </div>
    );  
  }
}

export default App;
