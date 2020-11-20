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
	      notEmpty: {
          msg: "車輌名は必ず入力してください。"
        }
	    }
  	},
    crew: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: "搭乗員数は必ず入力してください。"
        },
        isInt: {
          msg: "整数を入力してください。"
        },
        min: {
          args: [1],
          msg: "１以上の値が必要です。"
        }
      }
    },
    length: {
      type: DataTypes.FLOAT,
      validate: {
        notEmpty: {
          msg: "全長は必ず入力してください。"
        },
        isFloat: {
          msg: "数値を入力してください。"
        },
        min: {
          args: [0],
          msg: "０以上の値が必要です。"
        }
      }
    },
    weight: {
      type: DataTypes.FLOAT,
      validate: {
        notEmpty: {
          msg: "重量は必ず入力してください。"
        },
        isFloat: {
          msg: "数値を入力してください。"
        },
        min: {
          args: [0],
          msg: "０以上の値が必要です。"
        }
      }
    },
    speed: {
      type: DataTypes.FLOAT,
      validate: {
        notEmpty: {
          msg: "最高速度は必ず入力してください。"
        },
        isFloat: {
          msg: "数値を入力してください。"
        },
        min: {
          args: [0],
          msg: "０以上の値が必要です。"
        }
      }
    },
    team: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "チーム名は必ず記入してください。"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Tanks',
  });
  return Tanks;
};
