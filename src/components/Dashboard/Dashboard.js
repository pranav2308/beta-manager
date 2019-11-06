import React from 'react';
import { NavLink } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = (props) => {
	
	const tableStyle = {
		height : '300px',
		marginTop:  '10%',
  		marginLeft: '25%'
	}
	const smallHeadingStyle = {
		color : '#dbd5d0',
		fontWeight: 'bold',
		fontSize : '150%'
	}

	const { url } = props.computedMatch;
	
	return (
		<table style = {tableStyle}>
		  <tbody>
		    <tr>
		      <td className="align-middle text-center" style = {smallHeadingStyle}>{`Welcome [userName]! Please choose the allocation strategy from below:`}</td>
		    </tr>
		    <tr>
		      <td className="align-middle text-center" style = {smallHeadingStyle}>
		      <ul>
		      	<li>
		      		<NavLink className = "inactive" activeClassName = "active" to = {url.concat("/IVS")}>Inverse Variance Strategy</NavLink>
		      	</li>
		      	<li>
		      		<NavLink  className = "inactive" activeClassName = "active" to = {url.concat("/Markowitz")}>Markowitz Strategy</NavLink>
		      	</li>
		      </ul>
		      </td>
		    </tr>
		  </tbody>
		</table>
	);
}

export default Dashboard;