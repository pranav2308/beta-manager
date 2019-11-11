import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import CurrencyInput from 'react-currency-input';
import './InputIVS.css';


class InputIVS extends React.Component{
	
	constructor(props){
		super(props);
	}

	render(){

		
		return(
			<div className = "inputcard">
				<MDBContainer>
			      <MDBRow>
			        <MDBCol md="6">
			          <MDBCard>
			            <MDBCardBody className = "IVSinput">
			              <form>
			                <p className="h4 text-center py-4">Choose parameters for Inverse Variance Strategy</p>
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
      								aria-describedby="basic-addon" />
    						   </div>

			                  <MDBInput
			                    label="Window length in days"
			                    icon="hourglass-start"
			                    group
			                    type="number"
			                    validate
			                    error="wrong"
			                    success="right"
			                  />

			                   <div className="input-group">
	      							<div className="input-group-prepend">
	          							<i className = "fas fa-money-bill-wave fa-2x"></i>
	          							<span className = "text-center grey-text capitalHeading">
					                  	Capital Available
					            		</span>
	      							</div>
      								
					                <CurrencyInput prefix="$" value = {0.00} decimalSeparator="." thousandSeparator="," precision="2" className = "currencyInput"/>
    						   </div>
			                </div>
			                <div className="text-center py-4 mt-3">
			                  <MDBBtn color="light-green" type="button" rounded="true">
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

export default InputIVS;