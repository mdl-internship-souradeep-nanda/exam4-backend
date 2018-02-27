const models = require('../../models');

const getSavedState = user => models.answers.findAll({
  where: {
    username: user.username,
  },
});

const route = {
  path: '/getSavedState',
  method: 'GET',
  handler: (req, res) => {
    getSavedState({ username: req.headers.username })
      .then(res);
  },
};
module.exports = {
  route,
  getSavedState,
};
