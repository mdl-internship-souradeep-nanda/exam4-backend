module.exports = (sequelize, DataTypes) => {
  const questions = sequelize.define('questions', {
    question: DataTypes.STRING,
    questionId: DataTypes.INTEGER,
    option1: DataTypes.STRING,
    option2: DataTypes.STRING,
    option3: DataTypes.STRING,
    option4: DataTypes.STRING,
    option5: DataTypes.STRING,
    option6: DataTypes.STRING,
    option7: DataTypes.STRING,
    option8: DataTypes.STRING,
    option9: DataTypes.STRING,
    option10: DataTypes.STRING,
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
      },
    },
  });
  return questions;
};
