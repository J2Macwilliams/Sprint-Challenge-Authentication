const request = require('supertest');

const server = require('../api/server.js');

const db = require('../database/dbConfig');

describe('AuthRouter', function() {
	describe('environment', function() {
		it('should set environment to testing', function() {
			expect(process.env.DB_ENV).toBe('testing');
		});
	});
	//LOGIN POST tests-----------------------------------
	describe('Post /', function() {
		beforeEach(async function() {
			await db('users').truncate();
		});
		describe('add user', function() {
			it('should return a 201 ok', function() {
				return request(server)
					.post('/api/login')
					.send({ username: 'Jeremy', password: 'Bear' })
					.then(res => {
						expect(res.status).toBe(201);
					});
			});
		});
	});
});
