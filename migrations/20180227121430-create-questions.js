module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('questions', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    question: {
      type: Sequelize.STRING,
    },
    questionId: {
      type: Sequelize.INTEGER,
      unique: true,
    },
    option1: {
      type: Sequelize.STRING,
    },
    option2: {
      type: Sequelize.STRING,
    },
    option3: {
      type: Sequelize.STRING,
    },
    option4: {
      type: Sequelize.STRING,
    },
    option5: {
      type: Sequelize.STRING,
    },
    option6: {
      type: Sequelize.STRING,
    },
    option7: {
      type: Sequelize.STRING,
    },
    option8: {
      type: Sequelize.STRING,
    },
    option9: {
      type: Sequelize.STRING,
    },
    option10: {
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
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('questions'),
};
