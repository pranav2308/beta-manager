import React from 'react';
import { VictoryChart, VictoryPie, VictoryTheme, VictoryContainer, VictoryLabel } from 'victory';
import { MDBBtn } from 'mdbreact';
import './MarkowitzVisualize.css';


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

class MarkowitzVisualize extends React.Component{
	
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
	
	onReturnToDashboardButtonClick = () => {
		this.props.undefineInputs();
		this.props.history.push('/dashboard');
	}

	onTryAnotherInputButtonClick = () => {
		this.props.undefineInputs();
		const { url } = this.props.computedMatch;
		const newUrl = url.split('/').slice(0, -1).join('/').concat('/InputMarkowitz');
		this.props.history.push(newUrl);	
	}

	componentDidMount(){
		this.timeOutObj = window.setTimeout(this.updateData,0);
	}

	componentWillUnmount(){
		window.clearTimeout(this.timeOutObj);
	}


	render(){

		const data = [
			{ticker : 'AAPL', allocation : 35},
			{ticker : 'AVP', allocation : 5},
			{ticker : 'MRO', allocation : 20},
			{ticker : 'PACD', allocation : 15},
			{ticker : 'TSLA', allocation : 25}
		]

		const tableContent = data.map( (elem, index) => {
			return (
					<tr>
				      <th scope="row">{index + 1}</th>
				      <td>{elem.ticker}</td>
				      <td>{elem.allocation}</td>
				      <td>{100}</td>
				    </tr>
				);
		});

		return (
			<div className = "ivs-content">
				<div className = "chart-style">
					<table style = {tableStyle}>

					  <tbody>
					    <tr>
					      <td className="align-middle text-center" style = {smallHeadingStyle}>Markowitz Portfolio Allocation</td>
					    </tr>

					  </tbody>
					</table>

					<VictoryPie data = {this.state.data} 
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


export default MarkowitzVisualize;