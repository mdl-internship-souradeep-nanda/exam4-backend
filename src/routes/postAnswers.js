const postAnswers = answers => Promise.resolve(true);
const getScore = user => Promise.resolve(0);

const route = {
  path: '/postAnswers',
  method: 'POST',
  handler: (req, res) => {
    res('NOT IMPLEMENTED');
  },
};

module.exports = {
  route,
  postAnswers,
  getScore,
};
