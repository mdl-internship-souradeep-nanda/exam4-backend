const models = require('../../models');
const joi = require('joi');

const getUserData = user => models.users.findOne({
  where: {
    username: user.username,
  },
});

const isUserInDb = user => getUserData(user)
  .then(retrievedUser => retrievedUser !== null);

const createUser = user => models.users.create({
  username: user.username,
  score: 0,
});

const route = {
  path: '/login',
  method: 'POST',
  handler: (req, res) => {
    const obj = typeof req.payload === 'string' ? JSON.parse(req.payload) : req.payload;
    const { username } = obj;
    const userObj = { username };
    isUserInDb(userObj)
      .then((userIsInDb) => {
        if (userIsInDb) {
          return getUserData(userObj);
        }
        return createUser(userObj)
          .then(() => getUserData(userObj));
      })
      .then(res);
  },
  // config: {
  //   validate: {
  //     headers: {
  //       username: joi.string().required(),
  //     },
  //     options: {
  //       allowUnknown: true,
  //     },
  //   },
  // },
};

module.exports = {
  route,
  isUserInDb,
  createUser,
  getUserData,
};
