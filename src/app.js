const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();

const { jwtDecode } = require('./auth/middlewares');

const middlewares = require('./auth/middlewares');

// routes
// eslint-disable-next-line import/no-unresolved
const routes = require('./routes');
// eslint-disable-next-line import/no-unresolved
const routesauth = require('./auth');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(jwtDecode);

app.use('/api/v1', routes);
app.use('/api/v1', routesauth);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
