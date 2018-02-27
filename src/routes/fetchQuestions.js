const rp = require('request-promise');

const externals = require('../externals.json');
const models = require('../../models');

const fetchFromExternal = () => rp(externals.allQuestions)
  .then(str => JSON.parse(str))
  .then(obj => obj.allQuestions);

const fetchQuestions = () => models.questions.findAll();

const isDbPopulated = () => fetchQuestions()
  .then(allQuestions => !(allQuestions.length === 0));

const populateDb = (questions) => {
  const promises = questions.map(question =>
    models.questions.upsert(question));
  return Promise.all(promises);
};

const route = {
  path: '/fetchQuestions',
  method: 'GET',
  handler: (req, res) => {
    isDbPopulated()
      .then((dbIsPopulated) => {
        if (dbIsPopulated) {
          return fetchQuestions();
        }
        return fetchFromExternal()
          .then(populateDb)
          .then(fetchQuestions);
      }).then(res);
  },
};

module.exports = {
  route,
  isDbPopulated,
  populateDb,
  fetchQuestions,
  fetchFromExternal,
};
