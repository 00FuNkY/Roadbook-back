const express = require('express');
const prisma = require('../prismaClient');

const { hashPassword } = require('./util');

const router = express.Router();

router.post('/', async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const results = await prisma.user.create({
      data: {
        email,
        password: hashPassword(password),
      },
    });

    /* const user = await prisma.user.findUnique({
      where: {
        email,
      },
    }); */

    res.status(201).json(results);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
