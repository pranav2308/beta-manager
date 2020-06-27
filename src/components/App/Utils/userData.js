const emptyUser = {
  userID : '',
  fullName : '',
  email : '',
  country : '',
  joinDate : '',
  nIVS : '',
  nMarkowitz: ''  
}

const intialState = {
  
  userAuthenticated : false,
  user : emptyUser
  
}

function authenticateUser(user){
	if(!this.state.userAuthenticated){
		this.setState({ userAuthenticated : true, user: user });  
	}
}

function flushUser() {
	if(this.state.userAuthenticated){
	  this.setState({ userAuthenticated : false, user: emptyUser });  
	}
}

export { intialState, authenticateUser, flushUser };