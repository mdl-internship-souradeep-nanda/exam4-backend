const login = require('./login').route;
const fetchQuestions = require('./fetchQuestions').route;
const postAnswers = require('./postAnswers').route;
const getLeaderboard = require('./getLeaderboard').route;

module.exports = [].concat(
  login,
  fetchQuestions,
  postAnswers,
  getLeaderboard,
);
