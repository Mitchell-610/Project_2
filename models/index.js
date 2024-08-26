const User = require('./user');
const Pet = require('./pet');

User.hasMany(Pet, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Pet.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Pet };
