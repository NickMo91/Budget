const mongoose = require('./index.js');
const Schema = mongoose.Schema;

const TxnSchema = new Schema({
  amount: Number,
  description: {
    type: String,
    default: ''
  },
  category: { type: String, index: true },
  account: { type: String, index: true },
  date: Date,
  transactionType: String
});

TxnSchema.path('amount').get(function(num) {
  return (num / 100).toFixed(2);
});

TxnSchema.path('amount').set(function(num) {
  return num * 100;
});

module.exports = mongoose.model('Transaction', TxnSchema);
