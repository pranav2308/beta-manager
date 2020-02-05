import React from "react";
import { onEmailChange, onPasswordChange, onFullNameChange, onConfirmPasswordChange, onSelectCountry, onRegisterButtonClick, onLoginLinkClick } from '../Utils';
import RegisterView from './RegisterView';

class Register extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      fullName : '',
      email : '',
      password: '',
      confirmPassword : '',
      country : 'United States'
    }

    this.onEmailChange = onEmailChange.bind(this);
    this.onPasswordChange = onPasswordChange.bind(this);
    this.onFullNameChange = onFullNameChange.bind(this);
    this.onConfirmPasswordChange = onConfirmPasswordChange.bind(this);
    this.onSelectCountry = onSelectCountry.bind(this);
    this.onRegisterButtonClick = onRegisterButtonClick.bind(this);
    this.onLoginLinkClick = onLoginLinkClick.bind(this);
  }

  render(){

    const { fullName, email, password, confirmPassword, country } = this.state;
    const { onEmailChange, onPasswordChange, onFullNameChange, onConfirmPasswordChange, onSelectCountry, onRegisterButtonClick, onLoginLinkClick } = this;
    return(
      <RegisterView 
      fullName = {fullName} 
      email = {email} 
      password = {password} 
      confirmPassword = {confirmPassword} 
      country = {country} 
      onEmailChange = {onEmailChange} 
      onPasswordChange = {onPasswordChange} 
      onFullNameChange = {onFullNameChange} 
      onConfirmPasswordChange = {onConfirmPasswordChange} 
      onSelectCountry = {onSelectCountry} 
      onRegisterButtonClick = {onRegisterButtonClick} 
      onLoginLinkClick = {onLoginLinkClick}/>
    );
  } 

};

export default Register;