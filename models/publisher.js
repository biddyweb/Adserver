"use strict";
module.exports = function(sequelize, DataTypes) {
  var Publisher = sequelize.define("Publisher", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    passwordDigest: DataTypes.STRING,
    domain: DataTypes.STRING,
    apiKey: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Publisher;
};