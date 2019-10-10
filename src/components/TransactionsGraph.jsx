import React from 'react';
import Pizza from './Pizza';
import BarGraph from './BarGraph';

const TransactionsGraph = ({ data }) => {
	return (
		<div>
			<Pizza data={data} />
			<BarGraph data={data} />
		</div>
	);
};

export default TransactionsGraph;
