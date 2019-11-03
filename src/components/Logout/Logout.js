import React from 'react';

const Logout = (props) => {

	const { flushUser, component : Component } = props;
	flushUser();
	return (<Component />);
}

export default Logout;