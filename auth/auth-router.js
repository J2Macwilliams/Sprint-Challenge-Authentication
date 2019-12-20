const router = require('express').Router();


const bcrypt = require('bcryptjs');

// pull in signToken
const signToken = require('../JWT/signToken');

//Pull in knex helper models
const  userDb = require('../models/userDb');

router.post('/register', (req, res) => {
  // implement registration


});

router.post('/login', (req, res) => {
  // implement login
});

module.exports = router;
