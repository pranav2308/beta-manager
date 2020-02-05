import React from 'react';
import { onClick } from './Utils';
import  NavbarView from './NavbarView';



class Navbar extends React.Component {
  
  constructor() {
    
    super();
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = onClick.bind(this);
    
  }

  render() {

    const { userAuthenticated } = this.props;
    const { onClick } = this;
    const { isWideEnough, collapse } = this.state;
    
    return (

      <NavbarView userAuthenticated = {userAuthenticated} onClick = {onClick} isWideEnough = {isWideEnough} collapse = {collapse}/>

    ); 
  }
}

export default Navbar;