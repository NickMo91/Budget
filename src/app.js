import React from 'react';
import NavBar from './components/NavBar.jsx';
import TransactionsList from './components/TransactionsList.jsx';
import TransactionsGraph from './components/TransactionsGraph.jsx';
import FileInputForm from './components/FileInputForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          date: '01/01/2019',
          description: 'Skyba',
          Amount: 49,
          category: 'Gym'
        },
        {
          date: '04/04/2019',
          description: 'Feedfish',
          Amount: 60,
          category: 'Restaurants'
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <NavBar />
        <h1>Hello World</h1>
        <TransactionsList transactions={this.state.data} />
        <TransactionsGraph />
        <FileInputForm />
      </div>
    );
  }
}

export default App;
