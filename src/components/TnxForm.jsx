import React, { Component } from 'react';
import Axios from 'axios';
import '../styles.css';

export class TnxForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      date: '',
      amount: '',
      category: '',
      account: '',
      transactionType: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.postTrnx = this.postTrnx.bind(this);
  }

  postTrnx(trxn) {
    console.log(this.state);
    return Axios.post('/api/transactions', trxn)
      .then(({ data }) => {
        this.props.fetchData();
        this.setState({
          description: '',
          date: '',
          amount: '',
          category: '',
          account: '',
          transactionType: ''
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    const {
      description,
      date,
      amount,
      category,
      account,
      transactionType
    } = this.state;

    let transaction = {
      description: description,
      date: date,
      amount: +amount,
      category: category,
      account: account,
      transactionType: transactionType
    };

    this.postTrnx(transaction);
  }

  handleChange(e) {
    let key = e.target.name;
    let value = e.target.value;
    this.setState({
      [key]: value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className='form'>
          <div className='form-item'>
            <label htmlFor=''>
              Description:
              <input
                type='text'
                name='description'
                value={this.state.description}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className='form-item'>
            <label htmlFor=''>
              Date:
              <input
                type='text'
                name='date'
                value={this.state.date}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className='form-item'>
            <label htmlFor=''>
              Amount:
              <input
                type='text'
                name='amount'
                value={this.state.amount}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className='form-item'>
            <label htmlFor=''>
              Category:
              <input
                type='text'
                name='category'
                value={this.state.category}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className='form-item'>
            <label htmlFor=''>
              Account:
              <input
                type='text'
                name='account'
                value={this.state.account}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className='form-item'>
            <label htmlFor=''>
              Transaction Type:
              <input
                type='text'
                name='transactionType'
                value={this.state.transactionType}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className='form-item'>
            <input type='submit' value='submit' />
          </div>
        </form>
      </div>
    );
  }
}

export default TnxForm;
