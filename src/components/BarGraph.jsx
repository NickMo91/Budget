import React, { Component } from 'react';
import { BarChart } from 'react-d3-components';
import data from '../data.js';
import helperFunctions from '../helpers.js';

export class BarGraph extends Component {
	constructor(props) {
		super(props);

		// console.log(helperFunctions.amountPerMonth(data));
		// console.log('amount per category per month');
		// console.log(helperFunctions.amountPerCategoryPerMonth(data));
		this.state = {};
	}

	render() {
		// let transactions = this.props.data.map((transaction) => {
		// 	return { x: transaction.description, y: Number(transaction.amount) };
		// });
		let data = [
			{
				label: 'somethingA',
				values: [ { x: 'SomethingA', y: 10 }, { x: 'SomethingB', y: 4 }, { x: 'SomethingC', y: 3 } ]
			},
			{
				label: 'somethingB',
				values: [ { x: 'SomethingA', y: 6 }, { x: 'SomethingB', y: 8 }, { x: 'SomethingC', y: 5 } ]
			},
			{
				label: 'somethingC',
				values: [ { x: 'SomethingA', y: 6 }, { x: 'SomethingB', y: 8 }, { x: 'SomethingC', y: 5 } ]
			}
		];
		return (
			<div>
				<BarChart data={data} width={400} height={400} margin={{ top: 10, bottom: 50, left: 50, right: 10 }} />
			</div>
		);
	}
}

export default BarGraph;
