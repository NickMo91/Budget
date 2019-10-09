import React, { Component } from 'react';
import createDb from '../graph.js';

export class TransactionsGraph extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {
		createDb(this.props);
	}

	componentDidUpdate() {
		createDb(this.props);
	}
	render() {
		return <div className="graph" />;
	}
}

export default TransactionsGraph;
