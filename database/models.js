const mongoose = require('./index.js');
const Schema = mongoose.Schema;

const TxnSchema = new Schema({
  amount: {
    type: Number,
    get: num => (num / 100).toFixed(2),
    set: num => num * 100
  },
  description: {
    type: String,
    default: ''
  },
  category: { type: String, index: true },
  account: { type: String, index: true },
  date: { type: Date, get: date => date.toLocaleDateString() },
  transactionType: String
});

TxnSchema.set('toObject', { getters: true });
TxnSchema.set('toJSON', { getters: true });

// TxnSchema.path('amount').get(function(num) {
//   return (num / 100).toFixed(2);
// });

// TxnSchema.path('amount').set(function(num) {
//   return num * 100;
// });

module.exports = mongoose.model('Transaction', TxnSchema);
