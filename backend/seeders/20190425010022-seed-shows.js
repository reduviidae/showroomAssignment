"use strict";

const faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
    let seedData = [];

    for (let i = 0; i < 50; i++) {
      const fakeData = {
        title: faker.company.catchPhrase(),
        img_url: faker.image.imageUrl(),
        user_id: Math.floor(Math.random() * 10) + 1,
        genre_id: Math.floor(Math.random() * 10) + 1,
        createdAt: faker.date.past(),
        updatedAt: new Date()
      };
      seedData.push(fakeData);
    }

    return queryInterface.bulkInsert("Shows", seedData);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Shows", null, {});
  }
};
