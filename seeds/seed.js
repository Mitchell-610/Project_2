const sequelize = require('../config/connection');
const { User, Pet } = require('../models');

const userData = require('./userData.json');
const catsJSON = require('./cats.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const cat of catsJSON) {
    await Pet.create({
      ...cat,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
