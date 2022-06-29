'use strict';
module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert('Tasks',
    [
      {
        task: 'Terminar o desafio da blitz',
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Tasks', null, {}),
};
