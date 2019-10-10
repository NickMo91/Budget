import React from 'react';
import Pizza from './Pizza';
import BarGraph from './BarGraph';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

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
        <Pizza data={amountPerCategoryAllMonths} />
      </Paper>
      <Paper className={classes.root}>
        <BarGraph
          dataPerCatAllMonths={amountPerCategoryAllMonths}
          dataPerCategory={amountPerCategoryPerMonth}
          dataPerMonth={amountPerMonth}
        />
      </Paper>
    </div>
  );
};

export default TransactionsGraph;
