import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import BubbleChart from '@weknow/react-bubble-chart-d3';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2, 0),
    padding: theme.spacing(2, 2)
  }
}));

const BubbleContainer = props => {
  const classes = useStyles();

  const bubbleData = Object.keys(props.amountPerCategoryAllMonths).map(key => ({
    label: key,
    value: props.amountPerCategoryAllMonths[key]
  }));

  return (
    <div>
      <Paper className={classes.root}>
        <BubbleChart
          graph={{
            zoom: 1.1,
            offsetX: -0.05,
            offsetY: -0.01
          }}
          width={750}
          height={680}
          padding={0} // optional value, number that set the padding between bubbles
          showLegend={true} // optional value, pass false to disable the legend.
          legendPercentage={20} // number that represent the % of with that legend going to use.
          legendFont={{
            family: 'Arial',
            size: 12,
            color: '#000',
            weight: 'bold'
          }}
          valueFont={{
            family: 'Arial',
            size: 12,
            color: '#fff',
            weight: 'bold'
          }}
          labelFont={{
            family: 'Arial',
            size: 16,
            color: '#fff',
            weight: 'bold'
          }}
          data={bubbleData}
        />
      </Paper>
    </div>
  );
};

export default BubbleContainer;
