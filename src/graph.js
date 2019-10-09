import * as d3 from 'd3';
// import TransactionGraph from './components/TransactionsGraph.jsx';
import data from './data.js';
// import { create } from 'domain';

const createDb = (props) => {
	d3
		.select('.graph')
		.selectAll('div')
		.data(data)
		.enter()
		.append('div')
		.style('width', function(d) {
			return d + 'px';
		})
		.text(function(d) {
			return d;
		});
};
export default createDb;
