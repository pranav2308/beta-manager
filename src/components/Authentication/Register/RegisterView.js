import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBModalFooter, MDBIcon, MDBCardHeader, MDBBtn, MDBInput } from "mdbreact";
import { CountryDropdown } from 'react-country-region-selector';
import { loginLinkStyle } from './RegisterStyles';
import './Register.css'; 

const RegisterView = (props) => {


	const {fullName, email, password, confirmPassword, country, onEmailChange, onPasswordChange, onFullNameChange, onConfirmPasswordChange, onSelectCountry, onRegisterButtonClick, onLoginLinkClick } = props;

	return (

		<div className = "authentication">
	        <MDBContainer>
	          <MDBRow>
	            <MDBCol md="6">
	              <MDBCard>
	                <MDBCardBody>
	                  <MDBCardHeader className="form-header warm-flame-gradient rounded">
	                    <h3 className="my-3">
	                      <MDBIcon icon="lock" /> Registeration
	                    </h3>
	                  </MDBCardHeader>
	                  <form>
	                    <div className="grey-text">
	                      <MDBInput
	                        label="Type your full name"
	                        value = {fullName}
	                        icon="address-book"
	                        group
	                        type="email"
	                        validate
	                        error="wrong"
	                        success="right"
	                        onChange = {onFullNameChange}
	                      />
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
	                      <MDBInput
	                        label="Confirm your password"
	                        value = {confirmPassword}
	                        icon="exclamation-triangle"
	                        group
	                        type="password"
	                        onChange = {onConfirmPasswordChange}
	                        validate
	                      />
	                    </div>

	                    <div className="input-group">
	                      <div className="input-group-prepend">
	                          <i className = "fas fa-map-marker-alt fa-2x grey-text"></i>
	                          <span className = "text-center grey-text country-heading">
	                              Country
	                          </span>
	                      </div>
	                          <CountryDropdown defaultOptionLabel = "United States" className = "country-dropdown" value = {country} onChange = {(country) => onSelectCountry(country)}/>
	                   </div>
	                  <div className="text-center mt-4">
	                    <MDBBtn
	                      color="deep-orange"
	                      className="mb-3"
	                      type="button"
	                      onClick = {onRegisterButtonClick}
	                    >
	                      Register
	                    </MDBBtn>
	                  </div>
	                  </form>
	                  <MDBModalFooter>
	                    <div className="font-weight-light">
	                      <p>Already a member? <span style = {loginLinkStyle} onClick = {onLoginLinkClick}>Log in</span></p>
	                      <p>Forgot Password?</p>
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

export default RegisterView;