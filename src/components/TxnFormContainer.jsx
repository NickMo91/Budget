import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TxnForm from './TnxForm.jsx';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2, 0),
    padding: theme.spacing(2, 2)
  }
}));

const TxnFormContainer = props => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant='h5' component='h4'>
        <b>Add Transaction</b>
      </Typography>
      <TxnForm fetchData={props.fetchData} />
    </Paper>
  );
};

export default TxnFormContainer;
