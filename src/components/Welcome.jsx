import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5, 3),
    margin: theme.spacing(2, 0)
  }
}));

function Welcome(props) {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant='h5' component='h3'>
          {'Welcome to the '}
          <b>{'Super Budget\u2122'}</b>
        </Typography>
        <Typography component='p'>
          {'Super Budget\u2122 will help you track your spending!'}
        </Typography>
      </Paper>
    </div>
  );
}

export default Welcome;
