import React from 'react';
import { tableStyle, smallHeadingStyle } from './DashboardStyles';
import { NavLink } from 'react-router-dom';
import './Dashboard.css';

const DashboardView = (props) => {

	const { url, fullName } = props;

	return(
		<table style = {tableStyle}>
		  <tbody>
		    <tr>
		      <td className="align-middle text-center" style = {smallHeadingStyle}>{`Welcome ${fullName}! Please choose the allocation strategy from below:`}</td>
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

export default DashboardView;