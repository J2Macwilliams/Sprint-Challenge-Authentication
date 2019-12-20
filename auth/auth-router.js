const router = require('express').Router();


const bcrypt = require('bcryptjs');

// pull in signToken
const signToken = require('../JWT/signToken');

//Pull in knex helper models
const  userDb = require('../models/userDb');

router.post('/register', (req, res) => {
  // implement registration
  let user = req.body;

	const hash = bcrypt.hashSync(user.password, 8);

	user.password = hash;

	userDb
		.add(user)
		.then(stored => {
			res.status(200).json(stored);
		})
		.catch(err => {
			res.status(500).json(err);
		});

});

router.post('/login', (req, res) => {
  // implement login
});

module.exports = router;
