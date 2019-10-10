import React, { Component } from 'react';
import { PieChart } from 'react-d3-components';

export class Pizza extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		let trxns = this.props.data;

		var data = {
			label: 'somethingA',
			values: []
		};
		for (let category in trxns) {
			let snglTrxn = { x: category, y: trxns[category] };
			data.values.push(snglTrxn);
		}

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
