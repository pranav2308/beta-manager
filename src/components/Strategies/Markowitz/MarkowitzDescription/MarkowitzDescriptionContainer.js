import React from 'react';
import MarkowitzDescriptionView from './MarkowitzDescriptionView';
import { onProceedButtonClick } from '../../Utils';

const MarkowitzDescription = (props) => {
	
	const { url } = props.match;
	const { push } = props.history;
	
	return (
		<MarkowitzDescriptionView 
			url = {url} 
			push = {push} 
			onProceedButtonClick = {onProceedButtonClick}
		/>
	);
	
}


export default MarkowitzDescription;