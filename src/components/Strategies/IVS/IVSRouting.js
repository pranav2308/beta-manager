import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {InputProtectedRoute} from '../Utils';
import IVSDescription from './IVSDescription';
import InputIVS from './InputIVS';
import IVSVisualize from './IVSVisualize';
import IVSProcessing from './IVSProcessing';

const defaultState = {
	inputsDefined : false,
	allocationStatus : 'NotDefined',
	allocation : 'NotDefined',
	capital : 'NotDefined'
}

class IVSRouting extends React.Component{
	
	constructor(props){
		super(props);
		this.state = defaultState
	}

	defineInputs = () => {
		this.setState({inputsDefined : true});
	}

	collectAllocation = (allocationStatus, allocation, capital) =>{
		this.setState({allocationStatus : allocationStatus, allocation : allocation, capital : capital});
	}

	flushInputAndAllocation = () => {
		this.setState(defaultState);	
	}

	render(){

		const { url } = this.props.computedMatch;
		return(
			<Switch>
				<Route exact path = {url} component = {IVSDescription}/>
				<Route path = {url.concat('/InputIVS')} render = {(props) => <InputIVS {...props} {...this.props} defineInputs = {this.defineInputs} collectAllocation = {this.collectAllocation}/>}/>
				<InputProtectedRoute path = {url.concat('/IVSProcessing')} inputsDefined = {this.state.inputsDefined} fallBackRoute = {url.concat('/InputIVS')} allocationStatus = {this.state.allocationStatus} component = {IVSProcessing}/>
				<InputProtectedRoute path = {url.concat('/IVSVisualize')} inputsDefined = {this.state.inputsDefined} fallBackRoute = {url.concat('/InputIVS')} flushInputAndAllocation = {this.flushInputAndAllocation} allocation = {this.state.allocation} capital = {this.state.capital} component = {IVSVisualize}/>
			</Switch>
		);
	}
}

export default IVSRouting;