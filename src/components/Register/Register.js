import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBModalFooter, MDBIcon, MDBCardHeader, MDBBtn, MDBInput } from "mdbreact";

const loginLinkStyle = {
    color : '#7f7bff',
    fontStyle: 'italic',
    cursor:'pointer',
    textDecorationLine: 'underline'
  }


class Registration extends React.Component{
  
  constructor(props){
    super(props);
  }

  onRegisterButtonClick = () => {
    this.props.authenticateUser();
    this.props.history.push('/dashboard');
  }

  onLoginLinkClick = () =>{
    this.props.history.push('/login');
  }

  render(){
    
    return(
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
                        icon="address-book"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        label="Type your email"
                        icon="envelope"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        label="Type your password"
                        icon="lock"
                        group
                        type="password"
                        validate
                      />
                      <MDBInput
                        label="Confirm your password"
                        icon="exclamation-triangle"
                        group
                        type="password"
                        validate
                      />
                    </div>

                  <div className="text-center mt-4">
                    <MDBBtn
                      color="deep-orange"
                      className="mb-3"
                      type="button"
                      onClick = {this.onRegisterButtonClick}
                    >
                      Register
                    </MDBBtn>
                  </div>
                  </form>
                  <MDBModalFooter>
                    <div className="font-weight-light">
                      <p>Already a member? <span style = {loginLinkStyle} onClick = {this.onLoginLinkClick}>Log in</span></p>
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
};

export default Registration;