const models = require('../../models');

const MAX_LIMIT = 5;

const getLeaderboard = () => models.users.findAll({
  limit: MAX_LIMIT,
  order: [['score', 'DESC']],
});

const route = {
  path: '/getLeaderboard',
  method: 'GET',
  handler: (req, res) => {
    getLeaderboard()
      .then(res);
  },
};

module.exports = {
  route,
  getLeaderboard,
};
