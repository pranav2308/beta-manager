import React from 'react';
import { MDBBtn, MDBIcon } from 'mdbreact';

import { contentStyle, tableStyle, bigHeadingStyle, smallHeadingStyle, buttonStyle } from './MarkowitzDescriptionStyles';

const MarkowitzDescriptionView = (props) => {

	const { url, push, onProceedButtonClick } = props;

	return (
		<div style = {contentStyle}>
			<table style = {tableStyle}>
			  <tbody>
			    <tr>
			      <td className="align-middle text-center" style = {bigHeadingStyle}>Markowitz Portfolio Optimization Strategy</td>
			    </tr>
			    <tr>
			      <td className="align-middle text-center" style = {smallHeadingStyle}>[Short Description of Markowitz Strategy]</td>
			    </tr>
			  </tbody>
			</table>
			<MDBBtn color="deep-orange" style = {buttonStyle} onClick = { () => onProceedButtonClick(url, push, 'Markowitz')}>
        		 Proceed <MDBIcon icon="long-arrow-alt-right" className="ml-1" />
      		</MDBBtn>
		</div>

	);

}

export default MarkowitzDescriptionView;