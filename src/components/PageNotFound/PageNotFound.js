import React from 'react';
import { MDBBtn } from 'mdbreact';


const onReturnToDashboardButtonClick = (props) => {
		props.history.push('/dashboard');
	}

const PageNotFound = (props) => {
	
	const tableStyle = {
		height : '300px',
		marginTop:  '10%',
  		marginLeft: 'auto',
  		marginRight : 'auto'
	}

	const bigHeadingStyle = {
		color : '#dbd5d0',
		fontWeight: 'bold',
		fontSize : '350%'
	}

	const smallHeadingStyle = {
		color : '#dbd5d0',
		fontWeight: 'bold',
		fontSize : '150%'
	}

	const buttonStyle = {
		marginTop: '15%'
	}

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
                      onClick = {() => {onReturnToDashboardButtonClick(props)}}>
		                Return to Dashboard
		            </MDBBtn>
		      </td>
		    </tr>
		  </tbody>
		</table>

	);
}

export default PageNotFound;