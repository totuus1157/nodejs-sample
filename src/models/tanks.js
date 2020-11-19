'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tanks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Tanks.init({
    name: {
	    type: DataTypes.STRING,
	    validate: {
	      notEmpty: true
	    }
  	},
    crew: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true,
        isInt: true,
        min: 1
      }
    },
    length: {
      type: DataTypes.FLOAT,
      validate: {
        notEmpty: true,
        isFloat: true,
        min: 0
      }
    },
    weight: {
      type: DataTypes.FLOAT,
      validate: {
        notEmpty: true,
        isFloat: true,
        min: 0
      }
    },
    speed: {
      type: DataTypes.FLOAT,
      validate: {
        notEmpty: true,
        isFloat: true,
        min: 0
      }
    },
    team: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    }
  }, {
    sequelize,
    modelName: 'Tanks',
  });
  return Tanks;
};
