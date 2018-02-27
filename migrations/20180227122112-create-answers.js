module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('answers', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    username: {
      type: Sequelize.STRING,
      unique: 'compositeIndex',
    },
    questionid: {
      type: Sequelize.INTEGER,
      unique: 'compositeIndex',
    },
    answer: {
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }).then(() =>
    queryInterface.sequelize
      .query('ALTER TABLE answers ADD UNIQUE (username, questionid)')),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('answers'),
};
