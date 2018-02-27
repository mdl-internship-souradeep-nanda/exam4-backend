const getLeaderboard = () => Promise.resolve([]);

const route = {
  path: '/getLeaderboard',
  method: 'GET',
  handler: (req, res) => {
    res('NOT IMPLEMENTED');
  },
};

module.exports = {
  route,
  getLeaderboard,
};
