'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    link: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return user;
};