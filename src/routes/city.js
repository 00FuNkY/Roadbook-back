const express = require('express');
const prisma = require('../prismaClient');

const router = express.Router();

// GET

router.get('/', async (req, res, next) => {
  try {
    const results = await prisma.city.findMany({
      include: {
        image_id: true,
      },
    });
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
});
router.get('/visited', async (req, res, next) => {
  const { userId } = req.query;
  if (userId) {
    const images = await prisma.image.findMany({
      where: {
        userId: +userId,
      },
      include: {
        city: true,
      },
    });
    res.status(200).json(images);
  }
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const results = await prisma.city.findUnique({
      where: {
        id: +id,
      },
      include: {
        image_id: true,
      },
    });
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

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    await prisma.city.delete({
      where: {
        id: parseInt(id, 10),
      },
    });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

// PUT

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, country, text, longitude, latitude } = req.body;
    const results = await prisma.city.update({
      where: {
        id: parseInt(id, 10),
      },
      data: {
        name,
        country,
        text,
        longitude,
        latitude,
      },
    });
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
