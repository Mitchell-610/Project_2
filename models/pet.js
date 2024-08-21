const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pet extends Model {}

Pet.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    owner: {
      type: DataTypes.STRING,
      allowNull: false
    },
    species: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sex: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    birth: {
      type: DataTypes.DATE,
      allowNull: false
    },
    death: {
      type: DataTypes.DATE,
      allowNull: true
    }
  },
  {
    sequelize,
    modelName: 'Pet',
    timestamps: false
  }
);

module.exports = Pet;