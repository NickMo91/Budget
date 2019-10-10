import React, { Component } from 'react';
import Axios from 'axios';
export class TnxForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: []
		};
	}

	render() {
		return (
			<div>
				Form
				<form action="">
					<input type="text" value="description" />
					<input type="text" value="date" />
					<input type="text" value="amount" />
					<input type="text" value="category" />
					<input type="text" value="acount" />
					<input type="text" value="transactionType" />
					<input type="submit" value="submit" />
				</form>
			</div>
		);
	}
}

export default TnxForm;
