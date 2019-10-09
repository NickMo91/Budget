var csv = require('fast-csv');
const Transaction = require('../database/models');
const mongoose = require('mongoose');

// const expectedCols = [
//   'Amount',
//   'Description',
//   'Category',
//   'Account Name',
//   'Transaction Type'
// ];

// const hasCorrectHeaders = data => {
//   console.log(data);
//   for (expCol in expectedCols) {
//     if (data[expCol] === undefined) {
//       return false;
//     }
//   }
//   return true;
// };

exports.importFile = (req, res) => {
  if (!req.files) {
    console.log('no files');
    return res.status(400).send('No files were uploaded.');
  }

  var txnFile = req.files.file;

  var txns = [];

  csv
    .fromString(txnFile.data.toString(), {
      headers: true,
      ignoreEmpty: true
    })
    .on('data', function(data) {
      let transformedData = {
        _id: new mongoose.Types.ObjectId(),
        date: data['Date'],
        amount: data['Amount'],
        description: data['Description'],
        category: data['Category'],
        account: data['Account Name'],
        transactionType: data['Transaction Type']
      };
      txns.push(transformedData);
    })
    .on('end', function() {
      Transaction.create(txns, err => {
        if (err) throw err;
      });

      res
        .status(201)
        .send(txns.length + ' transactions have been successfully uploaded.');
    });
};

exports.getTransactions = (req, res) => {
  Transaction.find({}, (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      let formattedResult = result.slice();
      formattedResult.map(txn => {
        txn.amount = txn.amount + 1;
        console.log(txn);
        console.log('');

        return txn;
      });
      res.send(formattedResult);
    }
  });
};
