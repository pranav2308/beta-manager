import React from 'react';
import IVSProcessingView from './IVSProcessingView';
import { redirectProcessing } from '../../Utils';


const IVSProcessing = (props) => {

	
	const { allocationStatus, flushInputAndAllocation } = props;
	const url  = props.location.pathname;
	
	if(allocationStatus !== 'NotDefined'){
		return redirectProcessing(allocationStatus, url, flushInputAndAllocation, 'IVS');	
	}

	return (
		<IVSProcessingView />
	);
	
}

export default IVSProcessing;
