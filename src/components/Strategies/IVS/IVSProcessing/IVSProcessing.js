import React from 'react';
import ReactLoading from 'react-loading';
import './IVSProcessing.css';

const IVSProcessing = () => {

	const tableStyle = {
		marginTop:  '25%',
  		marginLeft: 'auto',
  		marginRight : 'auto'
	}

	const headingStyle = {
		color : '#dbd5d0',
		fontWeight: 'bold',
		fontSize : '200%'
	}

	return(
		<div>
			<table style = {tableStyle}>
			  <tbody>
			    <tr>
			      <td className="align-middle text-center" style = {headingStyle}>Please wait while we compute optimal allocation for you</td>
			    </tr>
			  </tbody>
			</table>
			<ReactLoading type={'bubbles'} color={'#ffffff'} height={'10%'} width={'10%'} className = "loader-style" />
		</div>

	);
}

export default IVSProcessing;
