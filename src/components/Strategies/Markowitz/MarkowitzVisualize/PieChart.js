import React from 'react';
import { VictoryPie, VictoryContainer, VictoryLabel } from 'victory';

const PieChart = (props) => {

	const { visulizationData } = props;

	return (
		<VictoryPie data = {visulizationData} 
			x = "ticker" 
			y = "allocation"
			startAngle={90}
				endAngle={450}
			animate={{ duration: 3000}}
			innerRadius = {20}
			labels={({ datum }) => `${datum.ticker}:${datum.allocation.toFixed(2)}%`}
			labelComponent={<VictoryLabel angle={0} labelPlacement = "perpendicular"/>}
			labelPosition="centroid"
			style = {{labels : {fontSize: 8, fill: "white", padding: 15, fontFamily : 'inherit'}}} 
			padAngle = {2}
			padding = {70}
			containerComponent={<VictoryContainer responsive={true} title = {`Title of Pie chart`} desc = {`Description of chart`}/>}
			colorScale={"qualitative"}/>
	);

}

export default PieChart;