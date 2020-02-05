import React from 'react';


function getMinAllocatedStock(allocation){
	let minAllocation = 100;
	let minAllocatedStock = {};
	allocation.forEach((allocationObj) => {
		if(allocationObj.allocation < minAllocation){
			minAllocation = allocationObj.allocation;
			minAllocatedStock = allocationObj;
		}
	});
	return minAllocatedStock;
}

function getDummyData(allocation){

	const minAllocatedStockTicker = getMinAllocatedStock(allocation).ticker;
	const dummyData = allocation.map((allocationObj) => {
		if(allocationObj.ticker === minAllocatedStockTicker){
			return {ticker : minAllocatedStockTicker, allocation : 100};
		}
		return {ticker : allocationObj.ticker, allocation : 0};
	});
	return dummyData;

}

function updateData(){
	this.setState({visulizationData : this.props.allocation});	
}

export { getDummyData, updateData };