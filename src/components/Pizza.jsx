import React, { Component } from 'react';
import { PieChart } from 'react-d3-components';
// import data from '../data';
import helperFunctions from '../helpers';

export class Pizza extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		// console.log(this.props.data);
		let transactions = helperFunctions.amountPerMonth(this.props.data);
		console.log(transactions);
		var data = {
			label: 'somethingA',
			values: [ { x: 'SomethingA', y: 10 }, { x: 'SomethingB', y: 4 }, { x: 'SomethingC', y: 3 } ]
		};

		var sort = null;
		return (
			<div>
				<PieChart
					data={data}
					width={600}
					height={400}
					margin={{ top: 10, bottom: 10, left: 100, right: 100 }}
					sort={sort}
				/>
			</div>
		);
	}
}

export default Pizza;
