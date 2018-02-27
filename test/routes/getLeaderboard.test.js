const models = require('../../models');
const { getLeaderboard } = require('../../src/routes/getLeaderboard');

describe('The getLeaderboard route should', () => {
  it('make sure a valid username is passed along with request', async () => {
    const request = {
      username: 'FAKE',
    };
    await getLeaderboard(request)
      .then((leaderboard) => {
        expect(leaderboard).toBeFalsy();
      });
  });
  it('return the leaderboard with 5 entries', async () => {
    const request = {
      username: 'user1',
    };
    await models.users.bulkCreate([
      { username: 'user1', score: 1 },
      { username: 'user2', score: 2 },
      { username: 'user3', score: 3 },
      { username: 'user4', score: 4 },
      { username: 'user5', score: 5 },
    ]).then(() => getLeaderboard(request))
      .then((leaderboard) => {
        expect(leaderboard.length).toBe(5);
      });
  });
});
