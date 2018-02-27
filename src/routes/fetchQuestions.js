const externals = require('../externals.json');
const models = require('../../models');

module.exports.fetchFromExternal = () => Promise.resolve([]);
module.exports.saveIntoDb = questions => models.questions.upsert(questions);
module.exports.isDbPopulated = () => Promise.resolve(true);
module.exports.populateDb = () => Promise.resolve([]);
module.exports.fetchQuestions = () => Promise.resolve([]);

module.exports.route = {
  path: '/fetchQuestions',
  method: 'GET',
  handler: (req, res) => {
    res('NOT IMPLEMENTED');
  },
};
