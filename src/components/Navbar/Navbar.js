import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink } from 'mdbreact';

import './Navbar.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {

    const { userAuthenticated } = this.props;
    let navbarRenderContent, logoRoute;
    
    if(userAuthenticated){
      
      logoRoute = '/dashboard';

      navbarRenderContent = 
        <MDBNavbarNav left>
          <MDBNavItem>
            <MDBNavLink to="/dashboard">Dashboard</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem >
            <MDBNavLink to="/logout">Log out</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>;
    }
    else{

      logoRoute = '/';

      navbarRenderContent = 
        <MDBNavbarNav left>
          <MDBNavItem>
            <MDBNavLink to="/">Home</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem >
            <MDBNavLink to="/login">Log In</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/register">Register</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>;
    }

    return (
      <div>
        <header>
          <MDBNavbar color="bg-primary" fixed="top" dark expand="md" scrolling transparent>
            <MDBNavbarBrand href={ logoRoute }>
              <strong>Beta Manager</strong>
            </MDBNavbarBrand>
            {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
            <MDBCollapse isOpen={this.state.collapse} navbar>
              { navbarRenderContent }
            </MDBCollapse>
          </MDBNavbar>
        </header>
      </div>
    );
  }
}

export default Navbar;