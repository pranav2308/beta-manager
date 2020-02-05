
function onRegisterLinkClick(){
	this.props.history.push('/register');
}


function onLoginLinkClick(){
	this.props.history.push('/login');
}

export { onRegisterLinkClick, onLoginLinkClick };