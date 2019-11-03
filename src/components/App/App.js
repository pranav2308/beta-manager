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

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      isAuthenticated : false
    }
  }

  authenticateUser = () => {
    this.setState({isAuthenticated : true});
    console.log('signed in!')
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
          </Switch>
        </Router>
      </div>
    );  
  }
}

export default App;
