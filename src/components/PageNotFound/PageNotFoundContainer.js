import React from 'react';
import { onReturnToDashboardButtonClick } from './Utils';
import PageNotFoundView from './PageNotFoundView';


const PageNotFound = (props) => {

	const { push } = props.history;

	return(
		<PageNotFoundView onReturnToDashboardButtonClick = {onReturnToDashboardButtonClick} push = {push} />
	);
	
}

export default PageNotFound;