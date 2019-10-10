import React, { Component } from 'react';
import { BarChart } from 'react-d3-components';

export class BarGraph extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data = [
      {
        label: 'Frogs',
        values: [
          { x: '9-2019', y: 10 },
          { x: '10-2019', y: 4 },
          { x: '11-2019', y: 3 }
        ]
      },
      {
        label: 'Cats',
        values: [
          { x: '9-2019', y: 5 },
          { x: '10-2019', y: 5 },
          { x: '11-2019', y: 0 }
        ]
      }
    ];

    if (Object.keys(this.props.amountPerCategoryPerMonth).length) {
      let amountPerCategoryPerMonth = this.props.amountPerCategoryPerMonth;
      let amountPerCategoryAllMonths = this.props.dataPerCatAllMonths;
      data = [];
      for (let cat in amountPerCategoryAllMonths) {
        let dataVal = { label: cat, values: [] };

        for (let month in amountPerCategoryPerMonth) {
          let value = {
            x: month,
            y: amountPerCategoryPerMonth[month][cat] || 0
          };
          dataVal.values.push(value);
        }
        data.push(dataVal);
      }
    }
    return (
      <div>
        <BarChart
          data={data}
          width={1000}
          height={400}
          margin={{ top: 10, bottom: 50, left: 50, right: 10 }}
        />
      </div>
    );
  }
}

export default BarGraph;
