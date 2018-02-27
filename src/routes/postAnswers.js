const rp = require('request-promise');

const models = require('../../models');
const externals = require('../externals.json');

const postAnswers = (answers) => {
  const promises = answers.map(answer =>
    models.answers.upsert(answer));
  return Promise.all(promises);
};

const verifyAnswer = answer =>
  rp(`${externals.verifyAnswer}${answer.questionid}`)
    .then(JSON.parse)
    .then(actualAnswer => answer.answer === actualAnswer.answer);

const getScore = user => models.answers.findAll({
  where: {
    username: user.username,
  },
}).then(answers => Promise.all(answers.map(verifyAnswer)));

const route = {
  path: '/postAnswers',
  method: 'POST',
  handler: (req, res) => {
    postAnswers(req.payload)
      .then(() => getScore({ username: req.payload[0].username }))
      .then(arr => arr.filter(elem => elem).length)
      .then(res);
  },
};

module.exports = {
  route,
  postAnswers,
  getScore,
};
