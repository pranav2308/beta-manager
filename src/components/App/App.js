import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';


import '../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import '../../../node_modules/bootstrap-css-only/css/bootstrap.min.css';
import '../../../node_modules/mdbreact/dist/css/mdb.css';

import Navbar from '../Navbar';
import Home from '../Home';


import { Login, Register } from '../Authentication';
import { AuthorizationProtectedRoute, Logout } from '../../Utils';
import Dashboard from '../Dashboard';
import IVSRouting from '../Strategies/IVS/IVSRouting';
import MarkowitzRouting from '../Strategies/Markowitz/MarkowitzRouting';
import PageNotFound from '../PageNotFound';
import './App.css';

const emptyUser = {
  userID : '',
  fullName : '',
  email : '',
  country : '',
  joinDate : '',
  nIVS : '',
  nMarkowitz: ''  
}


class App extends React.Component{

  constructor(props){
    
    super(props);
    this.state = {
      userAuthenticated : false,
      user : emptyUser
    }
  }

  authenticateUser = (user) => {
    if(!this.state.userAuthenticated){
      this.setState({ userAuthenticated : true, user: user });  
    }
  }

  flushUser = () => {
    if(this.state.userAuthenticated){
      this.setState({ userAuthenticated : false, user: emptyUser });  
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
            <AuthorizationProtectedRoute exact path = "/dashboard" userAuthenticated = {this.state.userAuthenticated} user = {this.state.user} component = {Dashboard} />
            <AuthorizationProtectedRoute path = "/dashboard/IVS" userAuthenticated = {this.state.userAuthenticated} user = {this.state.user} component = {IVSRouting} />
            <AuthorizationProtectedRoute path = "/dashboard/Markowitz" userAuthenticated = {this.state.userAuthenticated} user = {this.state.user} component = {MarkowitzRouting} />
            <Route exact path = "/logout" render = {(props) => <Logout {...props} flushUser = {this.flushUser} component = {Home}/>}/>
            <Route component = {PageNotFound}/>
          </Switch>
        </Router>
      </div>
    );  
  }
}

export default App;
