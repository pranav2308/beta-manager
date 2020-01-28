import React from 'react';
import { VictoryChart, VictoryPie, VictoryTheme, VictoryContainer, VictoryLabel } from 'victory';
import { MDBBtn } from 'mdbreact';
import './IVSVisualize.css';


const tableStyle = {
		marginTop:  '12%',
  		marginLeft: 'auto',
  		marginRight : 'auto'
	}
const smallHeadingStyle = {
		color : '#dbd5d0',
		fontWeight: 'bold',
		fontSize : '250%'
	}

const buttonStyle = {
	marginTop: '8%'
}

class IVSVisualize extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			visulizationData : this.getDummyData(this.props.allocation)
		};
		
	}

	getMinAllocatedStock = (allocation) => {
		let minAllocation = 100;
		let minAllocatedStock = {};
		allocation.forEach((allocationObj) => {
			if(allocationObj.allocation < minAllocation){
				minAllocation = allocationObj.allocation;
				minAllocatedStock = allocationObj;
			}
		});
		return minAllocatedStock;
	}

	getDummyData = (allocation) => {

		const minAllocatedStockTicker = this.getMinAllocatedStock(allocation).ticker;
		const dummyData = allocation.map((allocationObj) => {
			if(allocationObj.ticker === minAllocatedStockTicker){
				return {ticker : minAllocatedStockTicker, allocation : 100};
			}
			return {ticker : allocationObj.ticker, allocation : 0};
		});
		return dummyData;

	}
	updateData = () => {
		this.setState({visulizationData : this.props.allocation});	
	}
	
	onReturnToDashboardButtonClick = () => {
		this.props.flushInputAndAllocation();
		this.props.history.push('/dashboard');
	}

	onTryAnotherInputButtonClick = () => {
		this.props.flushInputAndAllocation();
		const { url } = this.props.computedMatch;
		const newUrl = url.split('/').slice(0, -1).join('/').concat('/InputIVS');
		this.props.history.push(newUrl);	
	}

	componentDidMount(){
		this.timeOutObj = window.setTimeout(this.updateData,0);
	}

	componentWillUnmount(){
		window.clearTimeout(this.timeOutObj);
	}


	render(){

		const { allocation : tableData, capital } = this.props;

		const tableContent = tableData.map( (elem, index) => {
			return (
					<tr>
				      <th scope="row">{index + 1}</th>
				      <td>{elem.ticker}</td>
				      <td>{elem.allocation.toFixed(2)}</td>
				      <td>{(elem.allocation * capital / 100).toFixed(2)}</td>
				    </tr>
				);
		});

		return (
			<div className = "ivs-content">
				<div className = "chart-style">
					<table style = {tableStyle}>

					  <tbody>
					    <tr>
					      <td className="align-middle text-center" style = {smallHeadingStyle}>Inverse Variance Portfolio Allocation</td>
					    </tr>

					  </tbody>
					</table>

					<VictoryPie data = {this.state.visulizationData} 
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
				</div>
				<div class="table-responsive">
					<table class="table table-dark table-hover table-striped table-style">
						<thead className = "table-success table-heading-style">
						    <tr>
						      <th scope="col">Sr No.</th>
						      <th scope="col">Ticker</th>
						      <th scope="col">Allocation (%)</th>
						      <th scope="col">Allocaion ($)</th>
						    </tr>
					    </thead>
					    <tbody className = "table-body-style">
					    	{tableContent}
					    </tbody>
  					</table>
				</div>
				<div className = "container" style = {buttonStyle}>
					<div className = "row justify-content-center">
						<div className = "col visualize-routing">
							
							<MDBBtn
		                      color="amber"
		                      className="mb-3"
		                      type="button"
		                      onClick = {this.onReturnToDashboardButtonClick}
		                    >
		                      Return to Dashboard
		                    </MDBBtn>

						</div>
						<div className = "col visualize-routing">
							<MDBBtn
		                      color="amber"
		                      className="mb-3"
		                      type="button"
		                      onClick = {this.onTryAnotherInputButtonClick}
		                    >
		                      Try another input
		                    </MDBBtn>
						</div>
					</div>
				</div>
			</div>
		);	
	}
	
}


export default IVSVisualize;