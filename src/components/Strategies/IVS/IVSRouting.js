import React from 'react';
import { Switch, Route } from 'react-router-dom';
import InputProtectedRoute from '../../PrivateRoutes/InputProtectedRoute';
import IVSDescription from './IVSDescription/IVSDescription';
import InputIVS from './InputIVS/InputIVS';
import IVSVisualize from './IVSVisualize/IVSVisualize';
class IVSRouting extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			inputsDefined : false
		}
	}

	defineInputs = () => {
		this.setState({inputsDefined : true});
	}

	render(){

		const { url } = this.props.computedMatch;
		return(
			<Switch>
				<Route exact path = {url} component = {IVSDescription}/>
				<Route path = {url.concat('/InputIVS')} render = {(props) => <InputIVS {...props} defineInputs = {this.defineInputs}/>}/>
				<InputProtectedRoute path = {url.concat('/IVSVisualize')} inputsDefined = {this.state.inputsDefined} fallBackRoute = {url.concat('/InputIVS')} component = {IVSVisualize}/>
			</Switch>
		);
	}
}

export default IVSRouting;