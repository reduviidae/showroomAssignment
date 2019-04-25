const faker = require('faker');

const seedData = [];

for (let i = 0; i < 10; i++) {
  const fakeData = {
    genre_name: faker.hacker.adjective(),
    createdAt: faker.date.past(),
    updatedAt: new Date()
  };
  seedData.push(fakeData);
}

console.log(seedData);
