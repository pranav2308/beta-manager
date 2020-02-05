import React from 'react';
import { getDummyData, updateData, onReturnToDashboardButtonClick, onTryAnotherInputButtonClick } from '../../Utils';
import IVSVisualizeView from './IVSVisualizeView';



class IVSVisualize extends React.Component{
	
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
			<IVSVisualizeView
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


export default IVSVisualize;