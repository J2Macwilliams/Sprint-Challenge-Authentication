const db = require('../database/dbConfig');
module.exports = {
	get,
	getBy,
	add,
	findById
};

function get() {
	return db('users').select('id', 'username', 'department');
}

function getBy(username) {
	return db('users')
		.select('id', 'username', 'password')
		.where(username);
}

function add(user) {
	return db('users')
		.insert(user, 'id')
		.returning('id');
		
}

function findById(id) {
	return db('users')
		.select('id', 'username')
		.where({ id })
		.first();
}