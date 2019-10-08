import React from 'react';
import NavBar from './components/NavBar.jsx';
import TransactionsList from './components/TransactionsList.jsx';
import TransactionsGraph from './components/TransactionsGraph.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [ 'what', 'ever' ]
		};
	}

	render() {
		return (
			<div>
				<NavBar />
				<h1>Hello World</h1>
				<TransactionsList />
				<TransactionsGraph />
			</div>
		);
	}
}

export default App;
