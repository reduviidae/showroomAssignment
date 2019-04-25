"use strict";

const faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
    let seedData = [];

    for (let i = 0; i < 10; i++) {
      const fakeData = {
        username: faker.internet.userName(),
        createdAt: faker.date.past(),
        updatedAt: new Date()
      };
      seedData.push(fakeData);
    }

    return queryInterface.bulkInsert("Users", seedData);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
