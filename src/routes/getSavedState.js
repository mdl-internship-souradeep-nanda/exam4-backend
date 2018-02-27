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
    const obj = typeof req.payload === 'string' ? JSON.parse(req.payload) : req.payload;
    const { username } = obj;
    getSavedState({ username })
      .then(res);
  },
};
module.exports = {
  route,
  getSavedState,
};
