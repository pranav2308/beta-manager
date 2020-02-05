function onEmailChange (event){
	this.setState({email : event.target.value});
}

function onPasswordChange(event){
	this.setState({password : event.target.value});
}

function onFullNameChange(event){
	this.setState({fullName : event.target.value});
}

function onConfirmPasswordChange(event){
	this.setState({confirmPassword : event.target.value});
}

function onSelectCountry(country){
	this.setState({country : country});
}


export { onEmailChange, onPasswordChange, onFullNameChange, onConfirmPasswordChange, onSelectCountry };