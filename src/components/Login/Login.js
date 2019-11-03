import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBModalFooter, MDBIcon, MDBCardHeader, MDBBtn, MDBInput } from "mdbreact";

const registerLinkStyle = {
    color : '#7f7bff',
    fontStyle: 'italic',
    cursor:'pointer',
    textDecorationLine: 'underline'
  }

class Login extends React.Component{

  constructor(props){
    super(props);
  }

  onRegisterLinkClick = () =>{
    this.props.history.push('/register');
  }

  render(){
    const { authenticateUser } = this.props;
    return(
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
                    </div>

                  <div className="text-center mt-4">
                    <MDBBtn
                      color="deep-orange"
                      className="mb-3"
                      type="submit"
                      onClick = {authenticateUser}
                    >
                      Login
                    </MDBBtn>
                  </div>
                  </form>
                  <MDBModalFooter>
                    <div className="font-weight-light">
                      <p >New member? <span style = {registerLinkStyle} onClick = {this.onRegisterLinkClick}>Register</span></p>
                      <p>Forgot Password?</p>
                    </div>
                  </MDBModalFooter>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    )
  } 
};

export default Login;