import React from 'react';
import { Switch, Route } from 'react-router-dom';
import InputProtectedRoute from '../../PrivateRoutes/InputProtectedRoute';
import IVSDescription from './IVSDescription/IVSDescription';
import InputIVS from './InputIVS/InputIVS';
import IVSVisualize from './IVSVisualize/IVSVisualize';
import IVSProcessing from './IVSProcessing/IVSProcessing';

class IVSRouting extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			inputsDefined : false,
			allocationStatus : '', 
			allocation : ''
		}
	}

	defineInputs = () => {
		this.setState({inputsDefined : true});
	}

	collectAllocation = (allocationStatus, allocation) =>{
		this.setState({allocationStatus: allocationStatus, allocation : allocation});
	}

	undefineInputs = () => {
		if(this.state.inputsDefined){
			this.setState({ inputsDefined : false });	
		}
		
	}

	render(){

		const { url } = this.props.computedMatch;
		return(
			<Switch>
				<Route exact path = {url} component = {IVSDescription}/>
				<Route path = {url.concat('/InputIVS')} render = {(props) => <InputIVS {...props} {...this.props} defineInputs = {this.defineInputs} collectAllocation = {this.collectAllocation}/>}/>
				<InputProtectedRoute path = {url.concat('/IVSProcessing')} inputsDefined = {this.state.inputsDefined} fallBackRoute = {url.concat('/InputIVS')} allocationStatus = {this.state.allocationStatus} component = {IVSProcessing}/>
				<InputProtectedRoute path = {url.concat('/IVSVisualize')} inputsDefined = {this.state.inputsDefined} fallBackRoute = {url.concat('/InputIVS')} undefineInputs = {this.undefineInputs} allocation = {this.state.allocation} component = {IVSVisualize}/>
			</Switch>
		);
	}
}

export default IVSRouting;