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
    this.state = {
      email: '',
      password : ''
    }
  }

  onEmailChange = (event) => {
    this.setState({email : event.target.value});
  }

  onPasswordChange = (event) => {
    this.setState({password : event.target.value});
  }

  onLoginButtonClick = () => {

    const{ email, password } = this.state;

    fetch('http://localhost:3000/login', {
      method: 'post',
      headers : {'Content-Type' : 'application/json'},
      body : JSON.stringify({
        email : email,
        password : password
      })
    })
    .then(response => {
      
      if(response.status === 200){
        return response.json();  
      }
      else if(response.status === 401){
        alert('Invalid credentials! Please try again.')
        return null;
      }
      else{
        //if rsposne.status === 500
        alert('Oops! Something went wrong on our server. Try loggin-in another time.')
        return null
      }
    })
    .then(userObjResponse => {
      if(userObjResponse){
        
        const { full_name : fullName, email, country, n_ivs : nIVS, n_markowitz : nMarkowitz, join_date : joinDate} = userObjResponse;
        
        const user = {
          fullName : fullName,
          email : email,
          country : country,
          nIVS : nIVS,
          nMarkowitz : nMarkowitz,
          joinDate : joinDate
        }

        this.props.authenticateUser(user);
        this.props.history.push('/dashboard');
      }
    })
    .catch(error => {
     alert('Oops! It seems that you are disconnected. Please check your internet connection and try to registering again.')
     });
  }

  onRegisterLinkClick = () =>{
    this.props.history.push('/register');
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
                        onChange = {this.onEmailChange}
                      />
                      <MDBInput
                        label="Type your password"
                        icon="lock"
                        group
                        type="password"
                        onChange = {this.onPasswordChange}
                        validate
                      />
                    </div>

                  <div className="text-center mt-4">
                    <MDBBtn
                      color="deep-orange"
                      className="mb-3"
                      type="button"
                      onClick = {this.onLoginButtonClick}
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