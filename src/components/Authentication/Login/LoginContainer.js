import React from "react";
import { onEmailChange, onPasswordChange, onLoginButtonClick, onRegisterLinkClick } from '../Utils';
import LoginView from './LoginView';



class Login extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password : ''
    }

    this.onEmailChange = onEmailChange.bind(this);
    this.onPasswordChange = onPasswordChange.bind(this);
    this.onLoginButtonClick = onLoginButtonClick.bind(this);
    this.onRegisterLinkClick = onRegisterLinkClick.bind(this);
  }

  


  render(){

    const{ email, password } = this.state;
    const { onEmailChange, onPasswordChange, onLoginButtonClick, onRegisterLinkClick } = this;

    return(
      <LoginView email = {email} password = {password} onEmailChange = {onEmailChange} onPasswordChange = {onPasswordChange} onLoginButtonClick = {onLoginButtonClick} onRegisterLinkClick = {onRegisterLinkClick}/>
    )
  } 
};

export default Login;