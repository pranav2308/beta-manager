import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import CurrencyInput from 'react-currency-input';
import './InputMarkowitz.css';


class InputMarkowitz extends React.Component{
	
	constructor(){
		super();
		this.state = {
			tickerList : '',
			windowLength : 0,
			capital: 0
		}
	}

	onComputeButtonClick = () => {
		
		this.props.defineInputs();

		const { url } = this.props.match;
		const newUrl = url.split('/').slice(0, -1).join('/').concat('/MarkowitzVisualize');
		
		this.props.history.push(newUrl);
	}


	onTickerListChange = (event) => {
		this.setState({ tickerList : event.target.value});
	}

	onWindowLengthChange = (event) => {
		this.setState( {windowLength : event.target.value});
	}

	onCapitalChange = (event, maskedValue, floatValue) => {
		this.setState({ capital : floatValue});
	}


	render(){

		const {tickerList, windowLength, capital } = this.state;
		
		return(
			<div className = "inputcard">
				<MDBContainer>
			      <MDBRow>
			        <MDBCol md="6">
			          <MDBCard>
			            <MDBCardBody className = "IVSinput">
			              <form>
			                <p className="h4 text-center py-4">Choose parameters for Markowitz Strategy</p>
			                <div className="grey-text">
			                  
			                  <div className="input-group">
      							<div className="input-group-prepend">
        							<span className="input-group-text" id="basic-addon">
          								<i className = "fas fa-clipboard-list"></i>
        							</span>
      							</div>
      							<input 
      								type="text" 
      								className="form-control" 
      								placeholder="Comma seprated ticker list" 
      								aria-label="list" 
      								aria-describedby="basic-addon"
      								value = {tickerList}
      								onChange = {this.onTickerListChange} />
    						   </div>

			                  <MDBInput
			                    label="Window length in days"
			                    icon="hourglass-start"
			                    group
			                    type="number"
			                    validate
			                    error="wrong"
			                    success="right"
			                    value = {windowLength}
			                    onChange = {this.onWindowLengthChange}
			                  />

			                   <div className="input-group">
	      							<div className="input-group-prepend">
	          							<i className = "fas fa-money-bill-wave fa-2x"></i>
	          							<span className = "text-center grey-text capitalHeading">
					                  	Capital Available
					            		</span>
	      							</div>
      								
					                <CurrencyInput prefix="$" value = {capital} decimalSeparator="." thousandSeparator="," precision="2" className = "currencyInput" onChangeEvent = {this.onCapitalChange}/>
    						   </div>
			                </div>
			                <div className="text-center py-4 mt-3">
			                  <MDBBtn color="light-green" type="button" rounded="true" onClick = {this.onComputeButtonClick}>
			                    Compute   
			                    <span style = {{marginLeft: '5px'}}><i className = "fas fa-brain"></i></span>
			                  </MDBBtn>
			                </div>
			              </form>
			            </MDBCardBody>
			          </MDBCard>
			        </MDBCol>
			      </MDBRow>
			    </MDBContainer>
			</div>
  		);
	}

}

export default InputMarkowitz;