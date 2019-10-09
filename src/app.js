import React from 'react';
import NavBar from './components/NavBar.jsx';
import TransactionsList from './components/TransactionsList.jsx';
import TransactionsGraph from './components/TransactionsGraph.jsx';
import FileInputForm from './components/FileInputForm.jsx';
import data from './data.js';
import { BarChart } from 'react-d3-components';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data
    };
  }

  render() {
    var data = [
      {
        label: 'somethingA',
        values: [
          { x: 'SomethingA', y: 10 },
          { x: 'SomethingB', y: 4 },
          { x: 'SomethingC', y: 3 }
        ]
      }
    ];
    return (
      <div>
        <NavBar />
        <svg />
        <h1>Hello World</h1>
        <TransactionsList transactions={this.state.data} />
        {/* <TransactionsGraph data={this.state.data} /> */}
        <FileInputForm />
        <BarChart
          data={data}
          width={400}
          height={400}
          margin={{ top: 10, bottom: 50, left: 50, right: 10 }}
        />
      </div>
    );
  }
}

export default App;
