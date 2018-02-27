const models = require('../../models');

const { postAnswers, getScore } = require('../../src/routes/postAnswers');

describe('The postAnswers route should', () => {
  it('reject if username field is invalid', async () => {
    const obj = {
      username: 'INVALID_USERNAME',
      questionId: 0,
      answer: 'answer',
    };

    await postAnswers(obj)
      .then((isSuccess) => {
        expect(isSuccess).toBeFalsy();
      });
  });
  it('reject if question id is invalid', async () => {
    const answers = [{
      username: 'user1',
      questionId: -1,
      answer: 'answer',
    }];

    await models.users.create({ username: 'user1' })
      .then(() => postAnswers(answers)
        .then((isSuccess) => {
          expect(isSuccess).toBeFalsy();
        }));
  });
  it('compute score based on answers supplied', async () => {
    const answers = [{
      username: 'user1',
      questionId: 0,
      answer: 'answer0',
    }, {
      username: 'user1',
      questionId: 1,
      answer: 'answer1',
    }];
    await postAnswers(answers)
      .then(() => getScore(answers[0].username)).then((score) => {
        expect(score).toBe(1);
      });
  });
});
