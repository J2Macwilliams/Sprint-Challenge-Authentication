const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// Pull in custom middleware
const authenticate = require('../auth/authenticate-middleware.js');
const validatePost = require('../middleware/validatePost.js');

// Pull in Routers
const authRouter = require('../auth/auth-router.js');
const jokesRouter = require('../jokes/jokes-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', validatePost, authRouter);
server.use('/api/jokes', authenticate, jokesRouter);

module.exports = server;
