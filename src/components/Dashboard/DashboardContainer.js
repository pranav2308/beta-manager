import React from 'react';
import DashboardView from './DashboardView';


const Dashboard = (props) => {
	
	const { url } = props.computedMatch;
	const { fullName } = props.user;
	
	return (
		<DashboardView url = {url} fullName = {fullName}/>
	);
}

export default Dashboard;