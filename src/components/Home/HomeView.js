import React from 'react';
import { tableStyle, bigHeadingStyle, smallHeadingStyle } from './HomeStyles';

const HomeView = () => {
	return(
		<table style = {tableStyle}>
		  <tbody>
		    <tr>
		      <td className="align-middle text-center" style = {bigHeadingStyle}>Beta Manager</td>
		    </tr>
		    <tr>
		      <td className="align-middle text-center" style = {smallHeadingStyle}> One stop solution for financial portfolio visualization</td>
		    </tr>
		  </tbody>
		</table>
	);
}

export default HomeView;