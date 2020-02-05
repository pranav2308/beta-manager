import React from 'react';
import IVSProcessingView from './IVSProcessingView';
import { redirectProcessing } from '../../Utils';


const IVSProcessing = (props) => {

	
	const { allocationStatus } = props;
	const url  = props.location.pathname;
	
	if(allocationStatus !== 'NotDefined'){
		return redirectProcessing(allocationStatus, url, 'IVS');	
	}

	return (
		<IVSProcessingView />
	);
	
}

export default IVSProcessing;
