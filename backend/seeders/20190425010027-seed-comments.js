"use strict";

const faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
    let seedData = [];

    for (let i = 0; i < 20; i++) {
      const fakeData = {
        comment_body: faker.company.bs(),
        user_id: Math.floor(Math.random() * 10) + 1,
        show_id: Math.floor(Math.random() * 20) + 1,
        createdAt: faker.date.past(),
        updatedAt: new Date()
      };
      seedData.push(fakeData);
    }

    return queryInterface.bulkInsert("Comments", seedData);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Comments", null, {});
  }
};
