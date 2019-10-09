const router = require('express').Router();
const controller = require('./controller');
var fileUpload = require('express-fileupload');

router.get('/transactions', controller.getTransactions);
router.use('/file', fileUpload());
router.post('/file', controller.importFile);

module.exports = router;
