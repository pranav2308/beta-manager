function isNameValid(name){
	/* 
	* Valid name must be non-empty. 
	*/
	return (Boolean(name.length));
} 

function isEmailValid(email){
	/* 
	* Valid email must be in username@service.domain format. 
	*/

	let re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
  	return re.test(email);
}

function isPasswordValid(password){
	/* 
	* Valid password must have 1 lowercase, 1 uppercase, 1 digit and least length of 8 chars. 
	*/
	let re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
	return re.test(password);
}

function isPasswordMatching(password, reTypedPassword){
	return (password === reTypedPassword);
}

function isValidRegistration(name, email, password, reTypedPassword){
	/* 
	* If name, email, password, re-typed password are matching then return true. 
	*/
	if(!isNameValid(name)){
		alert('Name cannot be empty! Please check and try again.');
		return false;
	}
	if(!isEmailValid(email)){
		alert('Email address entered is not valid! Please check and try again.');
		return false;	
	}
	if(!isPasswordValid(password)){
		alert('Required password must have 1 Uppercase, 1 lowercase and at-least 8 characters long! Please check and try again.');
		return false;
	}
	if(!isPasswordMatching(password, reTypedPassword)){
		alert("Your password and re-typed password does not match! Please check and try again.");
		return false;
	}
	return true;
}

export default isValidRegistration;