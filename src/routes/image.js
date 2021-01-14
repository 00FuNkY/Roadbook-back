const express = require('express');
const prisma = require('../prismaClient');

const router = express.Router();

// GET

router.get('/', async (req, res, next) => {
  try {
    const results = await prisma.image.findMany();
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
});

// POST

// DELETE

// PUT

module.exports = router;
