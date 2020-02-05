import React from 'react';

const AllocationTable = (props) => {
	
	const { tableData, capital } = props;

	const tableContent = tableData.map( (elem, index) => {
		return (
				<tr>
			      <th scope="row">{index + 1}</th>
			      <td>{elem.ticker}</td>
			      <td>{elem.allocation.toFixed(2)}</td>
			      <td>{(elem.allocation * capital / 100).toFixed(2)}</td>
			    </tr>
			);
	});

	return(
		<div class="table-responsive">
			<table class="table table-dark table-hover table-striped table-style">
				<thead className = "table-success table-heading-style">
				    <tr>
				      <th scope="col">Sr No.</th>
				      <th scope="col">Ticker</th>
				      <th scope="col">Allocation (%)</th>
				      <th scope="col">Allocaion ($)</th>
				    </tr>
			    </thead>
			    <tbody className = "table-body-style">
			    	{tableContent}
			    </tbody>
				</table>
		</div>
	);
}

export default AllocationTable;