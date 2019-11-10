import React from 'react';
import { VictoryChart, VictoryPie, VictoryTheme, VictoryContainer, VictoryLabel } from 'victory';

class IVSVisualize extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			data : this.getDefaultData()
		};
	}

	getDefaultData = () => {
		
		return [
			{ticker : 'AAPL', allocation : 0},
			{ticker : 'AVP', allocation : 100},
			{ticker : 'MRO', allocation : 0},
			{ticker : 'PACD', allocation : 0},
			{ticker : 'TSLA', allocation : 0}
		];

	}
	updateData = () => {
		const data = [
			{ticker : 'AAPL', allocation : 35},
			{ticker : 'AVP', allocation : 5},
			{ticker : 'MRO', allocation : 20},
			{ticker : 'PACD', allocation : 15},
			{ticker : 'TSLA', allocation : 25}
		]	
		this.setState({data : data});	
	}
	
	componentDidMount(){
		this.timeOutObj = window.setTimeout(this.updateData,0);
	}

	componentWillUnmount(){
		window.clearTimeout(this.timeOutObj);
	}


	render(){
		return (

			<VictoryPie data = {this.state.data} 
				x = "ticker" 
				y = "allocation"
				startAngle={90}
  				endAngle={450}
				animate={{ duration: 3000}}
				innerRadius = {10}
				labels={({ datum }) => `${datum.ticker}:${datum.allocation.toFixed(2)}%`}
				labelComponent={<VictoryLabel angle={0} labelPlacement = "perpendicular"/>}
				labelPosition="centroid"
				style = {{labels : {fontSize: 8, fill: "white", padding: 15, fontFamily : 'inherit'}}} 
				padAngle = {2}
				radius = {75}
				containerComponent={<VictoryContainer responsive={true} title = {`Title of Pie chart`} desc = {`Description of chart`}/>}
				colorScale={"qualitative"}/>

		);	
	}
	
}


export default IVSVisualize;