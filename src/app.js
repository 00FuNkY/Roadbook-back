const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();

// const { jwtDecode } = require('./auth/middlewares');

// const middlewares = require('./auth/middlewares');

// routes
// eslint-disable-next-line import/no-unresolved
const routes = require('./routes');

const routeAuth = require('./auth');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

// app.use(jwtDecode);
app.use('/', routes);
app.use('/auth', routeAuth);

// app.use(middlewares.notFound);
// app.use(middlewares.errorHandler);

module.exports = app;
