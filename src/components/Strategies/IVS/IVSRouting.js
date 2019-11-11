import React from 'react';
import { Switch, Route } from 'react-router-dom';
import IVSDescription from './IVSDescription/IVSDescription';
import InputIVS from './InputIVS/InputIVS';

class IVSRouting extends React.Component{
	constructor(props){
		super(props);
	}

	render(){

		const { url } = this.props.computedMatch;
		console.log('URl from routing ', url);
		return(
			<Switch>
				<Route exact path = {url} component = {IVSDescription}/>
				<Route path = {url.concat('/InputIVS')} component = {InputIVS}/>
			</Switch>
		);
	}
}

export default IVSRouting;