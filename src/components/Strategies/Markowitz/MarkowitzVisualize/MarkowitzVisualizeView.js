import React from 'react';
import PieChart from './PieChart';
import AllocationTable from './AllocationTable';
import RoutingButtons from './RoutingButtons';
import Heading from './Heading';
import './MarkowitzVisualize.css';

const MarkowitzVisualizeView = (props) => {
	const { tableData, visulizationData, capital, onReturnToDashboardButtonClick, onTryAnotherInputButtonClick, flushInputAndAllocation, push, url } = props;


	return (
			<div className = "ivs-content">
				<div className = "chart-style">
					<Heading/>
					<PieChart 
						visulizationData = { visulizationData }
					 />
					
				</div>
				<AllocationTable 
					tableData = { tableData }
					capital = { capital }
				/>
				<RoutingButtons 
					flushInputAndAllocation = {flushInputAndAllocation}
					push = {push}
					url = {url}
					onReturnToDashboardButtonClick = {onReturnToDashboardButtonClick}
					onTryAnotherInputButtonClick = {onTryAnotherInputButtonClick}
				/>
			</div>
		);
}

export default MarkowitzVisualizeView;