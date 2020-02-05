import React from 'react';
import Heading from './Heading';
import PieChart from './PieChart';
import AllocationTable from './AllocationTable';
import RoutingButtons from './RoutingButtons';
import './IVSVisualize.css';

const IVSVisualizeView = (props) => {

	const { tableData, visulizationData, capital, onReturnToDashboardButtonClick, onTryAnotherInputButtonClick, flushInputAndAllocation, push, url } = props;

	

		return (
			<div className = "ivs-content">
				<div className = "chart-style">
					<Heading/>
					<PieChart 
						visulizationData = {visulizationData}
					/>
				</div>
				<AllocationTable 
					capital = {capital}
					tableData = {tableData}
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

export default IVSVisualizeView;