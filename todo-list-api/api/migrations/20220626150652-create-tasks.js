'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      task: {
        allowNull: false,
        type: Sequelize.STRING
      },
      created_date: { 
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
     },
     status: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: "Pendente",
     },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Tasks');
  }
};