import React from 'react';
import { tableStyle, smallHeadingStyle } from './IVSStyles';

const Heading = (props) => {
	return (
		<table style = {tableStyle}>

		  <tbody>
		    <tr>
		      <td className="align-middle text-center" style = {smallHeadingStyle}>Inverse Variance Portfolio Allocation</td>
		    </tr>

		  </tbody>
		</table>
	);
}

export default Heading;