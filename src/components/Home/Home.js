import React from 'react'

const Home = () => {
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
	const smallHeadingStyle = {
		color : '#dbd5d0',
		fontWeight: 'bold',
		fontSize : '150%'
	}
	return (
		
		<table style = {tableStyle}>
		  <tbody>
		    <tr>
		      <td className="align-middle text-center" style = {bigHeadingStyle}>Beta Manager</td>
		    </tr>
		    <tr>
		      <td className="align-middle text-center" style = {smallHeadingStyle}> One stop solution for financial protfolio visualization</td>
		    </tr>
		  </tbody>
		</table>
		    
	);
}

export default Home;