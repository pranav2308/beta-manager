import React from 'react';


function getMinAllocatedStock(allocation){
	/*
	* Returns the stock which has minimum allocation.
	*/

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

	/*
	* Dummy data is produced by allocating highest 100% allocation to stock that has minimum actual allocation and -
	* rest of the stock are given 0% allocation.
	* This is done to produce pie-chart animation from dummy data -> actual data. 
	*/

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