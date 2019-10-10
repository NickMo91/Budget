import React, { Component } from 'react';
import { BarChart } from 'react-d3-components';

export class BarGraph extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let data = [
			{
				label: 'somethingA',
				values: [ { x: 'SomethingA', y: 10 }, { x: 'SomethingB', y: 4 }, { x: 'SomethingC', y: 3 } ]
			}
		];

		if (Object.keys(this.props.dataPerMonth).length) {
			let dataPerMonth = this.props.dataPerMonth;
			let amountPerCategoryAllMonths = this.props.dataPerCatAllMonths;
			data = [];
			for (let cat in amountPerCategoryAllMonths) {
				let dataVal = { label: cat, values: [] };

				for (let month in dataPerMonth) {
					let value = { x: month, y: dataPerMonth[month] };
					dataVal.values.push(value);
				}
				data.push(dataVal);
			}
		}
		return (
			<div>
				<BarChart data={data} width={1000} height={400} margin={{ top: 10, bottom: 50, left: 50, right: 10 }} />
			</div>
		);
	}
}

export default BarGraph;
