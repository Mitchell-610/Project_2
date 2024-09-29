const sequelize = require('../config/connection');
const Pet = require('./models/pet');

const syncAndSeed = async () => {
  await sequelize.sync({ force: true });

  // Seed data
  await Pet.bulkCreate([
    { name: 'Fluffy', owner: 'Harold', species: 'cat', sex: 'f', birth: '1993-02-04' },
    { name: 'Claws', owner: 'Gwen', species: 'cat', sex: 'm', birth: '1994-03-17' },
    { name: 'Buffy', owner: 'Harold', species: 'dog', sex: 'f', birth: '1989-05-13' },
    // Add more sample data as needed
  ]);
};

syncAndSeed();

module.exports = { Pet };