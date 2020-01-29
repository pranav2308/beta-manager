import React from 'react';
import ReactLoading from 'react-loading';
import { Redirect } from 'react-router-dom';
import './MarkowitzProcessing.css';

const MarkowitzProcessing = (props) => {

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
	
	const { allocationStatus } = props;
	const url  = props.location.pathname;
	
	if(allocationStatus === 'valid'){
		const newUrl = url.split('/').slice(0, -1).join('/').concat('/MarkowitzVisualize');
		return <Redirect to = {newUrl}/>
	}
	else if(allocationStatus === 'invalid'){
		alert('Invalid inputs! Please try again.');
		const newUrl = url.split('/').slice(0, -1).join('/').concat('/InputMarkowitz');
		return <Redirect to = {newUrl}/>
	}
	else if(allocationStatus === 'error'){
		alert('Oops! Something went wrong on our server. Try loggin-in another time.');
		const newUrl = url.split('/').slice(0, -1).join('/').concat('/InputMarkowitz');
		return <Redirect to = {newUrl}/>
	}
	return(
		<div>
			<table style = {tableStyle}>
			  <tbody>
			    <tr>
			      <td className="align-middle text-center" style = {headingStyle}>Please wait while we compute optimal allocation via Markowitz Strategy</td>
			    </tr>
			  </tbody>
			</table>
			<ReactLoading type={'bubbles'} color={'#ffffff'} height={'10%'} width={'10%'} className = "loader-style" />
		</div>

	);
}

export default MarkowitzProcessing;