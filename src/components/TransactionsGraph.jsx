import React from 'react';
import Pizza from './Pizza';
import BarGraph from './BarGraph';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2, 0),
    padding: theme.spacing(2, 2)
  }
}));

const TransactionsGraph = ({
  amountPerCategoryAllMonths,
  amountPerCategoryPerMonth,
  amountPerMonth
}) => {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant='h5' component='h4'>
          <b>Spending Per Month</b>
        </Typography>
        <Pizza data={amountPerCategoryAllMonths} />
      </Paper>
      <Paper className={classes.root}>
        <Typography variant='h5' component='h4'>
          <b>Spending Per Category Per Month</b>
        </Typography>
        <BarGraph
          dataPerCatAllMonths={amountPerCategoryAllMonths}
          amountPerCategoryPerMonth={amountPerCategoryPerMonth}
          dataPerMonth={amountPerMonth}
        />
      </Paper>
    </div>
  );
};

export default TransactionsGraph;
