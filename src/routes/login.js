const isUserInDb = user => Promise.resolve(true);
const createUser = user => Promise.resolve({});
const getUserData = user => Promise.resolve({});

const route = {
  path: '/login',
  method: 'POST',
  handler: (req, res) => {
    res('NOT IMPLEMENTED');
  },
};

module.exports = {
  route,
  isUserInDb,
  createUser,
  getUserData,
};
