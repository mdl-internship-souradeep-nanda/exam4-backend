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
    const obj = typeof req.payload === 'string' ? JSON.parse(req.payload) : req.payload;
    const { username } = obj[0];
    postAnswers(req.payload)
      .then(() => getScore({ username }))
      .then(arr => arr.filter(elem => elem).length)
      .then((score) => {
        models.users.findOne({
          where: {
            username,
          },
        }).then((user) => {
          models.users.upsert({ id: user.id, username, score });
          res(score);
        });
      });
  },
};

module.exports = {
  route,
  postAnswers,
  getScore,
};
