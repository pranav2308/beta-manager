import React from 'react';
import MarkowitzProcessingView from './MarkowitzProcessingView';
import { redirectProcessing } from '../../Utils';

const MarkowitzProcessing = (props) => {

	const { allocationStatus } = props;
	const url  = props.location.pathname;
	
	if(allocationStatus !== 'NotDefined'){
		return redirectProcessing(allocationStatus, url, 'Markowitz')
	}

	return(
		<MarkowitzProcessingView />
	);
}

export default MarkowitzProcessing;