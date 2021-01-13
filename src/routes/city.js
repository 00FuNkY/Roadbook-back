const express = require('express');
const prisma = require('../prismaClient');

const router = express.Router();

// GET

router.get('/', async (req, res, next) => {
  try {
    const results = await prisma.city.findMany();
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
});

// POST

router.post('/', async (req, res, next) => {
  try {
    const results = await prisma.city.create({
      data: {
        name: req.body.name,
        country: req.body.country,
        text: req.body.text,
        longitude: req.body.longitude,
        latitude: req.body.latitude,
      },
    });
    res.status(201).json(results);
  } catch (err) {
    next(err);
  }
});

// DELETE

// PUT

module.exports = router;
