const { getSavedState } = require('../../src/routes/getSavedState');

const models = require('../../models');

describe('The getSavedState route should', () => {
  it('return empty array if username does not have answers', async () => {
    await getSavedState({ username: 'NEW_USER' })
      .then((savedAnswers) => {
        expect(savedAnswers.length).toBe(0);
      });
  });
  it('return non empty array if user exists', async () => {
    await models.answers.destroy({ truncate: true })
      .then(() => models.answers.create({
        username: 'user1',
        questionid: 1,
        answer: 'answer1',
      })).then(() => getSavedState({ username: 'user1' }))
      .then((savedState) => {
        expect(savedState.length).toBe(1);
      });
  });
});
