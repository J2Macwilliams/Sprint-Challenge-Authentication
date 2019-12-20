const Users = require('./userDb')

const db = require('../database/dbConfig');

describe('Users model', function() {
	beforeEach(async () => {
		await db('users').truncate();
    });
    describe('add', function () {
        it ('should add a user to the database', async function() {
            await Users.add({username: 'Bear', password: 'Kitty'});

            const users = await db('users');
            expect(users).toHaveLength(1);
        })
    })
});
