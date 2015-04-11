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
        Publisher.hasMany(models.User, {foreignKey: 'publisherId'});
        Publisher.hasMany(models.ActionType,{foreignKey: 'publisherId'}); 
      }
    }
  });
  return Publisher;
};
