import React from 'react';
import { tableStyle, smallHeadingStyle } from './MarkowitzStyles';

const Heading = () => {
	return (
		<table style = {tableStyle}>

		  <tbody>
		    <tr>
		      <td className="align-middle text-center" style = {smallHeadingStyle}>Markowitz Portfolio Allocation</td>
		    </tr>

		  </tbody>
		</table>
	);
}

export default Heading;