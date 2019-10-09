import React from 'react';
import TransactionsForm from './TransactionsForm.jsx';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const TransactionsList = ({ transactions }) => {
	const columns = [
		{ id: 'name', label: 'Description', minWidth: 170 },
		{ id: 'code', label: 'Amount', minWidth: 100 },
		{
			id: 'population',
			label: 'Category',
			minWidth: 170,
			align: 'right',
			format: (value) => value.toLocaleString()
		},
		{
			id: 'size',
			label: 'Account',
			minWidth: 170,
			align: 'right',
			format: (value) => value.toLocaleString()
		}
	];

	function createData(name, code, population, size) {
		const density = population / size;
		return { name, code, population, size, density };
	}

	const rows = transactions.map((transaction) => {
		return createData(
			transaction.description,
			transaction.amount,
			transaction.category,
			transaction.account,
			transaction.transactionType
		);
	});

	const useStyles = makeStyles({
		root: {
			width: '100%'
		},
		tableWrapper: {
			maxHeight: 440,
			overflow: 'auto'
		}
	});

	const classes = useStyles();
	const [ page, setPage ] = React.useState(0);
	const [ rowsPerPage, setRowsPerPage ] = React.useState(10);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	return (
		<Paper className={classes.root}>
			<div className={classes.tableWrapper}>
				<Table stickyHeader>
					<TableHead>
						<TableRow>
							{columns.map((column) => (
								// TODO:
								<TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
									{column.label}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
							return (
								<TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
									{columns.map((column) => {
										const value = row[column.id];
										return (
											<TableCell key={column.id} align={column.align}>
												{column.format && typeof value === 'number' ? (
													column.format(value)
												) : (
													value
												)}
											</TableCell>
										);
									})}
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</div>
			<TablePagination
				rowsPerPageOptions={[ 10, 25, 100 ]}
				component="div"
				count={rows.length}
				rowsPerPage={rowsPerPage}
				page={page}
				backIconButtonProps={{
					'aria-label': 'previous page'
				}}
				nextIconButtonProps={{
					'aria-label': 'next page'
				}}
				onChangePage={handleChangePage}
				onChangeRowsPerPage={handleChangeRowsPerPage}
			/>
		</Paper>
	);
};

export default TransactionsList;
