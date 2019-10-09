const convertData = data =>
  data.map(txn => {
    txn.date = new Date(txn.date.substr(0, 10));
    return txn;
  });

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

function dateToYearMonth(date) {
  return '' + date.getFullYear() + '-' + monthNames[date.getMonth()];
}

function getDollars(amount) {
  return +Number.parseFloat(amount).toFixed(2);
}

function addDollars(a, b) {
  return +(a + b).toFixed(2);
}

const helperFunctions = {
  amountPerMonth: function(data) {
    data = convertData(data);
    let groupedData = {};
    for (let i = 0; i < data.length; i++) {
      let yearMonth = dateToYearMonth(data[i].date);
      const dollars = getDollars(data[i].amount);
      if (groupedData.hasOwnProperty(yearMonth)) {
        groupedData[yearMonth] = addDollars(groupedData[yearMonth], dollars);
      } else {
        groupedData[yearMonth] = dollars;
      }
    }
    return groupedData;
  },

  amountPerCategoryPerMonth: function(data) {
    data = convertData(data);
    let groupedData = {};
    for (let i = 0; i < data.length; i++) {
      let yearMonth = dateToYearMonth(data[i].date);
      let category = data[i].category;
      let dollars = getDollars(data[i].amount);
      if (!groupedData.hasOwnProperty(yearMonth)) {
        groupedData[yearMonth] = {};
      }
      if (!groupedData[yearMonth].hasOwnProperty(category)) {
        groupedData[yearMonth][category] = dollars;
      } else {
        groupedData[yearMonth][category] = addDollars(
          groupedData[yearMonth][category],
          dollars
        );
      }
    }
    return groupedData;
  },

  amountPerCategoryAllMonths: function(data) {
    data = convertData(data);
    let groupedData = {};
    for (let i = 0; i < data.length; i++) {
      let category = data[i].category;
      let dollars = getDollars(data[i].amount);
      if (groupedData.hasOwnProperty(category)) {
        groupedData[category] = addDollars(groupedData[category], dollars);
      } else {
        groupedData[category] = dollars;
      }
    }
    return groupedData;
  }
};

export default helperFunctions;
