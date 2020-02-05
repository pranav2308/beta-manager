import React from 'react';
import ReactLoading from 'react-loading';
import './MarkowitzProcessing.css';
import { tableStyle, headingStyle } from './MarkowitzProcessingStyles';

const MarkowitzProcessingView = (props) => {

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

export default MarkowitzProcessingView;