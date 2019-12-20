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
		describe('Register user', function() {
			it('should return a 201 ok', function() {
				return request(server)
					.post('/api/auth/register')
					.send({ username: 'Jeremy', password: 'Bear' })
					.then(res => {
						expect(res.status).toBe(201);
					});
			});
			it('should return with json', function() {
				return request(server)
					.post('/api/auth/register')
					.send({ username: 'Lindsay', password: 'Honey' })
					.then(res => {
						expect(res.type).toMatch(/json/i);
					});
			});
		});
		describe('Login user', function() {
			it('Login Should fail with 401 when bcryptCompare has wrong password', function() {
				return request(server)
					.post('/api/auth/login')
					.send({ username: 'Jeremy', password: 'Kumquat' })
					.then(res => {
						expect(res.status).toBe(401);
					});
			});
			it('should return json', function() {
				return request(server)
					.post('/api/auth/login')
					.send({ username: 'Lindsay', password: 'Honey' })
					.then(res => {
						expect(res.type).toMatch(/json/i);
					});
			});
		});
	});
});
