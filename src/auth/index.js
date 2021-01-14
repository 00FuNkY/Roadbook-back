const router = require('express').Router();

const auth = require('./auth');
const sign = require('./sign');

router.use('/', auth);
router.use('/sign', sign);

module.exports = router;
