import React from 'react';

const PageNotFound = () => {
	
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

	return (

		<table style = {tableStyle}>
		  <tbody>
		    <tr>
		      <td className="align-middle text-center" style = {bigHeadingStyle}>404 Page Not Found!</td>
		    </tr>
		    <tr>
		      <td className="align-middle text-center" style = {smallHeadingStyle}>There is nothing to see here. Stop fooling around and get back to portfolio visualization.</td>
		    </tr>
		  </tbody>
		</table>

	);
}

export default PageNotFound;