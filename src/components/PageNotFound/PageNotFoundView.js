import React from 'react';
import { MDBBtn } from 'mdbreact';
import { tableStyle, bigHeadingStyle, smallHeadingStyle, buttonStyle } from './PageNotFoundStyles';

const PageNotFoundView = (props) => {

	const { onReturnToDashboardButtonClick, push } = props;

	return (

		<table style = {tableStyle}>
		  <tbody>
		    <tr>
		      <td className="align-middle text-center" style = {bigHeadingStyle}>404 Page Not Found!</td>
		    </tr>
		    <tr>
		      <td className="align-middle text-center" style = {smallHeadingStyle}>There is nothing to see here. Stop fooling around and get back to portfolio visualization.</td>
		    </tr>
		    <tr>
		      <td 
		      	className="align-middle text-center"
		      	style = {buttonStyle}>
		      		<MDBBtn
                      color="dark-green"
                      className="mb-3"
                      type="button"
                      onClick = {() => {onReturnToDashboardButtonClick(push)}}>
		                Return to Dashboard
		            </MDBBtn>
		      </td>
		    </tr>
		  </tbody>
		</table>

	);
}

export default PageNotFoundView;