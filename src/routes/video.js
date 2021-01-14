const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Video' });
});

// GET

// POST

// DELETE

// PUT

module.exports = router;
