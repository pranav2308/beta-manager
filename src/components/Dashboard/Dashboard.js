import React from 'react';


const Dashboard = () => {
	
	const tableStyle = {
		height : '300px',
		marginTop:  '10%',
  		marginLeft: '35%'
	}
	const bigHeadingStyle = {
		color : '#dbd5d0',
		fontWeight: 'bold',
		fontSize : '350%'
	}

	return (
		<table style = {tableStyle}>
		  <tbody>
		    <tr>
		      <td className="align-middle text-center" style = {bigHeadingStyle}>Dashboard</td>
		    </tr>
		  </tbody>
		</table>
	);
}

export default Dashboard;