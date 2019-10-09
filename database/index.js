const mongoose = require('mongoose');
const mongoUrl = 'mongodb://localhost/budget';

mongoose.connect(
  mongoUrl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (err) throw err;
    else console.log(`successfully connected to mongoDB (${mongoUrl})`);
  }
);

module.exports = mongoose;
