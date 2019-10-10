import React from 'react';
import Pizza from './Pizza';
import BarGraph from './BarGraph';

const TransactionsGraph = ({ amountPerCategoryAllMonths, amountPerCategoryPerMonth, amountPerMonth }) => {
	return (
		<div>
			<Pizza data={amountPerCategoryAllMonths} />
			<BarGraph
				dataPerCatAllMonths={amountPerCategoryAllMonths}
				dataPerCategory={amountPerCategoryPerMonth}
				dataPerMonth={amountPerMonth}
			/>
		</div>
	);
};

export default TransactionsGraph;
