const models = require('../../models');
const {
  isDbPopulated,
  populateDb,
  fetchQuestions,
} = require('../../src/routes/fetchQuestions');

describe('The fetchQuestions route should', () => {
  it('check if db is populated', async () => {
    await models.questions.destroy({ truncate: true })
      .then(isDbPopulated)
      .then((result) => {
        expect(result).toBeFalsy();
      });
  });
  it('fetch questions from external server, save and return it', async () => {
    await populateDb()
      .then((questions) => {
        expect(questions.length).toBeGreaterThan(0);
      });
  });
  it('return saved questions if present', async () => {
    await fetchQuestions()
      .then((questions) => {
        expect(questions.length).toBeGreaterThan(0);
      });
  });
});
