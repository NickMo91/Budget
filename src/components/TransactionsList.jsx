import React from 'react';
import TransactionsForm from './TransactionsForm.jsx';

const TransactionsList = ({ transactions }) => {
	return (
		<div>
			<h1>this is a transactons List!</h1>
			<TransactionsForm />
			<div>
				{transactions.map((transaction, i) => {
					return <div key={i}>{transaction.description}</div>;
				})}
			</div>
		</div>
	);
};

export default TransactionsList;
