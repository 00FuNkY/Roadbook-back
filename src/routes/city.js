const express = require('express');
const multer = require('multer');
const fs = require('fs');
const cors = require('cors');
const prisma = require('../prismaClient');

const router = express.Router();

router.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage }).single('file');

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

router.post('/upload', function (req, res) {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
  });
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
