import React from 'react';

import { MDBBtn } from 'mdbreact';
import MarkowitzVisualizeView from './MarkowitzVisualizeView';
import { getDummyData, updateData, onReturnToDashboardButtonClick, onTryAnotherInputButtonClick } from '../../Utils';



class MarkowitzVisualize extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			visulizationData : getDummyData(this.props.allocation)
		};

		this.updateData = updateData.bind(this);
	}

	componentDidMount(){
		this.timeOutObj = window.setTimeout(this.updateData,0);
	}

	componentWillUnmount(){
		window.clearTimeout(this.timeOutObj);
	}


	render(){

		const { allocation : tableData, capital, flushInputAndAllocation } = this.props;
		const { push } = this.props.history;
		const { url } = this.props.computedMatch;
		const { visulizationData } = this.state;
		

		return (
			<MarkowitzVisualizeView
				tableData = {tableData}
				visulizationData = { visulizationData }
				capital = { capital }
				onReturnToDashboardButtonClick = { onReturnToDashboardButtonClick }
				onTryAnotherInputButtonClick = { onTryAnotherInputButtonClick }
				flushInputAndAllocation = { flushInputAndAllocation }
				push = { push }
				url = { url }
			/>
		);
	}
	
}


export default MarkowitzVisualize;