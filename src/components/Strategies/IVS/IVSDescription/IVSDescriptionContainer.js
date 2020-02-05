import React from 'react';
import { onProceedButtonClick } from '../../Utils';
import IVSDescriptionView from './IVSDescriptionView';


const IVSDecription = (props) => {
	
	const { url } = props.match;
	const { push } = props.history;

	return (

		<IVSDescriptionView 
			url = {url} 
			push = {push} 
			onProceedButtonClick = {onProceedButtonClick}
		/>

	);
	
}


export default IVSDecription;