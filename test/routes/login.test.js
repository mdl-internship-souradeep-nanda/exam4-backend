const {
  isUserInDb,
  createUser,
  getUserData,
} = require('../../src/routes/login');

const models = require('../../models');

describe('The login route should', () => {
  const user = {
    username: 'POTATO',
  };
  it('check if user is in database', async () => {
    await models.users.destroy({ truncate: true })
      .then(() => isUserInDb(user))
      .then((result) => {
        expect(result).toBeFalsy();
      });
  });
  it('create user if not in database', async () => {
    await createUser(user)
      .then(() => models.users.findAll())
      .then((users) => {
        expect(users.length).toBe(1);
      });
  });
  it('fetch user data from database', async () => {
    await getUserData(user)
      .then((retrievedUser) => {
        expect(retrievedUser.username).toBeDefined();
      });
  });
});
