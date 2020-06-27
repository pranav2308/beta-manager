import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBModalFooter, MDBIcon, MDBCardHeader, MDBBtn, MDBInput } from "mdbreact";
import { registerLinkStyle }  from './LoginStyles';

const LoginView = (props) => {

	const { email, password, onEmailChange, onPasswordChange, onLoginButtonClick, onRegisterLinkClick } = props;
	return (

		<div className = "authentication">
	        <MDBContainer>
	          <MDBRow>
	            <MDBCol md="6">
	              <MDBCard>
	                <MDBCardBody>
	                  <MDBCardHeader className="form-header warm-flame-gradient rounded">
	                    <h3 className="my-3">
	                      <MDBIcon icon="lock" /> Login
	                    </h3>
	                  </MDBCardHeader>
	                  <form>
	                    <div className="grey-text">
	                      <MDBInput
	                        label="Type your email"
	                        value = {email}
	                        icon="envelope"
	                        group
	                        type="email"
	                        validate
	                        error="wrong"
	                        success="right"
	                        onChange = {onEmailChange}
	                      />
	                      <MDBInput
	                        label="Type your password"
	                        value = {password}
	                        icon="lock"
	                        group
	                        type="password"
	                        onChange = {onPasswordChange}
	                        validate
	                      />
	                    </div>

	                  <div className="text-center mt-4">
	                    <MDBBtn
	                      color="deep-orange"
	                      className="mb-3"
	                      type="button"
	                      onClick = {onLoginButtonClick}
	                    >
	                      Login
	                    </MDBBtn>  
	                  </div>
	                  </form>
	                  <MDBModalFooter>
	                    <div className="font-weight-light">
	                      <p >New member? <span style = {registerLinkStyle} onClick = {onRegisterLinkClick}>Register</span></p>
	                    </div>
	                  </MDBModalFooter>
	                </MDBCardBody>
	              </MDBCard>
	            </MDBCol>
	          </MDBRow>
	        </MDBContainer>
	    </div>

	);
}

export default LoginView;