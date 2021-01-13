const router = require('express').Router();

const test = require('./test');
const city = require('./city');
const image = require('./image');
const video = require('./video');

router.use('/test', test);
router.use('/city', city);
router.use('/image', image);
router.use('/video', video);

module.exports = router;
