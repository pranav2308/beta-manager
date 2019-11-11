import React from 'react';
import { MDBBtn, MDBIcon } from 'mdbreact';

const onProceedClick = (props) => {
	const { url } = props.match;
	console.log('Url from desc ', url)
	props.history.push(url.concat('/InputIVS'));
}

const IVSDecription = (props) => {
	
	const contentStyle = {
		marginTop:  '10%'
	}
	const tableStyle = {
		height : '300px',
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
		marginLeft: '45%'
	}
	
	return (
		<div style = {contentStyle}>
			<table style = {tableStyle}>
			  <tbody>
			    <tr>
			      <td className="align-middle text-center" style = {bigHeadingStyle}>Inverse Variance Optimization Strategy</td>
			    </tr>
			    <tr>
			      <td className="align-middle text-center" style = {smallHeadingStyle}>[Short Description of IVS]</td>
			    </tr>
			  </tbody>
			</table>
			<MDBBtn color="deep-orange" style = {buttonStyle} onClick = { () => onProceedClick(props)}>
        		 Proceed <MDBIcon icon="long-arrow-alt-right" className="ml-1" />
      		</MDBBtn>
		</div>

	);
}


export default IVSDecription;