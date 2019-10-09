const express = require('express');
const path = require('path');
const morgan = require('morgan');
const apiRoutes = require('./api-routes');
const port = process.env.PORT || 3000;

require('../database');
const app = express();
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../dist')));
app.use('/api/', apiRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
