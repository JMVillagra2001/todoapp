'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      username: { type: Sequelize.STRING, allowNull: false },
      password: { type: Sequelize.STRING }
    });

    await queryInterface.createTable('todos', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: Sequelize.STRING, allowNull: false },
      completed: { type: Sequelize.BOOLEAN },
      user_id: {
        type: Sequelize.INTEGER, foreignKey: {
          name: 'todo_user_fk',
          table: 'users',
          mapping: 'id'
        }
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
    await queryInterface.dropTable('todos');
  }
};
