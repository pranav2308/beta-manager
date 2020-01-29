import React from 'react';
import { Switch, Route } from 'react-router-dom';
import InputProtectedRoute from '../../PrivateRoutes/InputProtectedRoute';
import MarkowitzDescription from './MarkowitzDescription/MarkowitzDescription';
import InputMarkowitz from './InputMarkowitz/InputMarkowitz';
import MarkowitzVisualize from './MarkowitzVisualize/MarkowitzVisualize';
import MarkowitzProcessing from './MarkowitzProcessing/MarkowitzProcessing';

const defaultState = {
	inputsDefined : false,
	allocationStatus : 'NotDefined',
	allocation : 'NotDefined',
	capital : 'NotDefined'
}


class MarkowitzRouting extends React.Component{
	
	constructor(props){
		super(props);
		this.state  = defaultState;
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
				<Route exact path = {url} component = {MarkowitzDescription}/>
				<Route path = {url.concat('/InputMarkowitz')} render = {(props) => <InputMarkowitz {...props} {...this.props} defineInputs = {this.defineInputs} collectAllocation = {this.collectAllocation}/>}/>
				<InputProtectedRoute path = {url.concat('/MarkowitzProcessing')} inputsDefined = {this.state.inputsDefined} fallBackRoute = {url.concat('/InputMarkowitz')} allocationStatus = {this.state.allocationStatus} component = {MarkowitzProcessing}/>
				<InputProtectedRoute path = {url.concat('/MarkowitzVisualize')} inputsDefined = {this.state.inputsDefined} fallBackRoute = {url.concat('/InputMarkowitz')} flushInputAndAllocation = {this.flushInputAndAllocation} allocation = {this.state.allocation} capital = {this.state.capital} component = {MarkowitzVisualize}/>
			</Switch>
		);
	}
}

export default MarkowitzRouting;