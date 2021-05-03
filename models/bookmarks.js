'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bookmarks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Bookmarks.init({
    url:{
      type:DataTypes.STRING,
      allowNull:true
  },
   comment: {
     type:DataTypes.STRING,
     allowNull:true

},
},
   {
    sequelize,
    modelName: 'Bookmarks',
  });
  return Bookmarks;
};