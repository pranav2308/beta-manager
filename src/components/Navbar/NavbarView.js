import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink } from 'mdbreact';
import './Navbar.css';

const NavbarView = (props) => {
	
	const { userAuthenticated, onClick, collapse, isWideEnough } = props;

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
            {!isWideEnough && <MDBNavbarToggler onClick={onClick} />}
            <MDBCollapse isOpen={collapse} navbar>
              { navbarRenderContent }
            </MDBCollapse>
          </MDBNavbar>
        </header>
      </div>
    );

}

export default NavbarView;