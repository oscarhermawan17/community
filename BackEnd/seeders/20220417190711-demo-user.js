'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up (queryInterface, Sequelize) {
    const new_password = await bcrypt.hash('Telegram333', 10);
    return queryInterface.bulkInsert('Users', [{
      first_name: 'Oscar',
      last_name: 'Hermawan',
      email: 'oscar.hermawan90@gmail.com',
      password: new_password,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
