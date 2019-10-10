import React from 'react';
import NavBar from './components/NavBar.jsx';
import TransactionsList from './components/TransactionsList.jsx';
import TransactionsGraph from './components/TransactionsGraph.jsx';
import FileInputForm from './components/FileInputForm.jsx';
import data from './data.js';
import Axios from 'axios';
import { BarChart } from 'react-d3-components';
import helperFunctions from './helpers.js';
const {
  amountPerMonth,
  amountPerCategoryPerMonth,
  amountPerCategoryAllMonths
} = helperFunctions;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allTransactions: [],
      amountPerCategoryPerMonth: {},
      amountPerCategoryAllMonths: {}
    };

    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    Axios.get('/api/transactions')
      .then(response => {
        if (response.data === undefined || response.data.length === 0) {
          throw new Error('did not get response data from server');
        }
        this.setState({
          allTransactions: response.data,
          amountPerCategoryPerMonth: amountPerCategoryPerMonth(response.data),
          amountPerCategoryAllMonths: amountPerCategoryAllMonths(response.data)
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <NavBar />
        <svg />
        <h1>Hello World</h1>
        <TransactionsList transactions={this.state.allTransactions} />
        {/* <TransactionsGraph data={this.state.data} /> */}
        <FileInputForm />
      </div>
    );
  }
}

export default App;
