import React from 'react';
import { Switch, Route } from 'react-router-dom';
import InputProtectedRoute from '../../PrivateRoutes/InputProtectedRoute';
import MarkowitzDescription from './MarkowitzDescription/MarkowitzDescription';
import InputMarkowitz from './InputMarkowitz/InputMarkowitz';
import MarkowitzVisualize from './MarkowitzVisualize/MarkowitzVisualize';
import MarkowitzProcessing from './MarkowitzProcessing/MarkowitzProcessing';

class MarkowitzRouting extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			inputsDefined : false
		}
	}

	defineInputs = () => {
		this.setState({inputsDefined : true});
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
				<Route exact path = {url} component = {MarkowitzDescription}/>
				<Route path = {url.concat('/InputMarkowitz')} render = {(props) => <InputMarkowitz {...props} defineInputs = {this.defineInputs}/>}/>
				<InputProtectedRoute path = {url.concat('/MarkowitzProcessing')} inputsDefined = {this.state.inputsDefined} fallBackRoute = {url.concat('/InputMarkowitz')} component = {MarkowitzProcessing}/>
				<InputProtectedRoute path = {url.concat('/MarkowitzVisualize')} inputsDefined = {this.state.inputsDefined} fallBackRoute = {url.concat('/InputMarkowitz')} undefineInputs = {this.undefineInputs} component = {MarkowitzVisualize}/>
			</Switch>
		);
	}
}

export default MarkowitzRouting;