import React from 'react';
import { MDBBtn } from 'mdbreact';
import { buttonStyle } from './MarkowitzStyles';

const RoutingButtons = (props) => {
	
	const { flushInputAndAllocation, push, url, onReturnToDashboardButtonClick, onTryAnotherInputButtonClick } = props;
	return(

		<div className = "container" style = {buttonStyle}>
			<div className = "row justify-content-center">
				<div className = "col visualize-routing">
					
					<MDBBtn
                      color="amber"
                      className="mb-3"
                      type="button"
                      onClick = {() => onReturnToDashboardButtonClick(flushInputAndAllocation, push)}
                    >
                      Return to Dashboard
                    </MDBBtn>

				</div>
				<div className = "col visualize-routing">
					<MDBBtn
                      color="amber"
                      className="mb-3"
                      type="button"
                      onClick = {() => onTryAnotherInputButtonClick(flushInputAndAllocation, url, 'Markowitz', push)}
                    >
                      Try another input
                    </MDBBtn>
				</div>
			</div>
		</div>

	);
}

export default RoutingButtons;