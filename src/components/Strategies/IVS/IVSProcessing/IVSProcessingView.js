import React from 'react';
import ReactLoading from 'react-loading';
import { tableStyle, headingStyle } from './IVSProcessingStyles';
import './IVSProcessing.css';


const IVSProcessingView = () => {

	return(
		<div>
			<table style = {tableStyle}>
			  <tbody>
			    <tr>
			      <td className="align-middle text-center" style = {headingStyle}>Please wait while we compute optimal allocation via Inverse variance Strategy</td>
			    </tr>
			  </tbody>
			</table>
			<ReactLoading type={'bubbles'} color={'#ffffff'} height={'10%'} width={'10%'} className = "loader-style" />
		</div>
	);

}

export default IVSProcessingView;