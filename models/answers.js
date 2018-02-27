module.exports = (sequelize, DataTypes) => {
  const answers = sequelize.define('answers', {
    username: DataTypes.STRING,
    questionid: DataTypes.INTEGER,
    answer: DataTypes.STRING,
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
      },
    },
  });
  return answers;
};
