import React from 'react';
import NavBar from './components/NavBar.jsx';
import TransactionsList from './components/TransactionsList.jsx';
import TransactionsGraph from './components/TransactionsGraph.jsx';
import FileInputForm from './components/FileInputForm.jsx';
import data from './data.js';
import Box from '@material-ui/core/Box';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: data
		};
	}

	render() {
		return (
			<div className="parentCont">
				<NavBar />
				<h1 className="header">Super Budget</h1>
				<div>
					<TransactionsList transactions={this.state.data} />
				</div>
				<div>
					<TransactionsGraph data={this.state.data} />
				</div>
				<FileInputForm />
			</div>
		);
	}
}

export default App;
