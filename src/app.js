import React from 'react';
import NavBar from './components/NavBar.jsx';
import TransactionsList from './components/TransactionsList.jsx';
import TransactionsGraph from './components/TransactionsGraph.jsx';
import FileInputForm from './components/FileInputForm.jsx';
import data from './data.js';
import Axios from 'axios';
import { BarChart } from 'react-d3-components';
import Box from '@material-ui/core/Box';
import helperFunctions from './helpers.js';
const { amountPerMonth, amountPerCategoryPerMonth, amountPerCategoryAllMonths } = helperFunctions;

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			allTransactions: [],
			amountPerCategoryPerMonth: {},
			amountPerCategoryAllMonths: {},
			amountPerMonth: {}
		};

		this.fetchData = this.fetchData.bind(this);
	}

	componentDidMount() {
		this.fetchData();
	}

	fetchData() {
		Axios.get('/api/transactions')
			.then((response) => {
				if (response.data === undefined || response.data.length === 0) {
					throw new Error('did not get response data from server');
				}
				this.setState({
					allTransactions: response.data,
					amountPerCategoryPerMonth: amountPerCategoryPerMonth(response.data),
					amountPerCategoryAllMonths: amountPerCategoryAllMonths(response.data),
					amountPerMonth: amountPerMonth(response.data)
				});
			})
			.catch((err) => console.log(err));
	}

	render() {
		return (
			<div className="parentCont">
				<div className="nav">
					<NavBar />
				</div>
				<h1 className="header">Super Budget</h1>
				<div>
					<TransactionsList transactions={this.state.allTransactions} />
				</div>
				<div id="graph">
					<TransactionsGraph
						amountPerCategoryAllMonths={this.state.amountPerCategoryAllMonths}
						amountPerCategoryPerMonth={this.state.amountPerCategoryPerMonth}
						amountPerMonth={this.state.amountPerMonth}
					/>
				</div>
				<FileInputForm />
			</div>
		);
	}
}

export default App;
