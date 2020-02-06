import isValidRegistration from './AuthenticationValidator';


function onLoginButtonClick(){

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

function onRegisterButtonClick(){
	
	const { fullName, email, password, confirmPassword : reTypedPassword, country } = this.state;

	if(isValidRegistration(fullName, email, password, reTypedPassword)){
		fetch('http://localhost:3000/register', {
			method: 'post',
			headers : {'Content-Type' : 'application/json'},
			body : JSON.stringify({
		  	fullName : fullName,
		  	email : email,
		  	password : password,
		  	country : country
			})
		})
  		.then(response => {
    
			if(response.status === 200){
			  return response.json();  
			}
			else if(response.status === 409){
			  alert('User with given email already exists! Try logging-in or register with different email')
			  return null;
			}
			else{
			  //if rsposne.status === 500
			  alert('Oops! Something went wrong on our server. Try registering another time.')
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
		})  
	}
}

export { onLoginButtonClick, onRegisterButtonClick };