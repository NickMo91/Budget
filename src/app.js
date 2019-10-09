import React from 'react';
import NavBar from './components/NavBar.jsx';
import TransactionsList from './components/TransactionsList.jsx';
import TransactionsGraph from './components/TransactionsGraph.jsx';
import FileInputForm from './components/FileInputForm.jsx';
import data from './data.js';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: data
		};
	}

	render() {
		return (
			<div>
				<NavBar />
				<svg />
				<h1>Hello World</h1>
				<TransactionsList transactions={this.state.data} />
				<TransactionsGraph data={this.state.data} />
				<FileInputForm />
			</div>
		);
	}
}

export default App;
