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
    return (
      <div>
        <header>
          <MDBNavbar color="bg-primary" fixed="top" dark expand="md" scrolling transparent>
            <MDBNavbarBrand href="/">
              <strong>Beta Manager</strong>
            </MDBNavbarBrand>
            {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
            <MDBCollapse isOpen={this.state.collapse} navbar>
              <MDBNavbarNav left>
                <MDBNavItem>
                  <MDBNavLink to="/">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/login">Log In</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/register">Register</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </header>
      </div>
    );
  }
}

export default Navbar;