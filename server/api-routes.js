const router = require('express').Router();
const controller = require('./controller');
var fileUpload = require('express-fileupload');

router.get('/transactions', controller.getTransactions);
// TODO: add trnsxs to list
router.post('/transactions', controller.addTransaction);
router.use('/file', fileUpload());
router.post('/file', controller.importFile);

module.exports = router;
