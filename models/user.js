"use strict";
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        User.belongsTo(models.Publisher, {foreignKey: 'publisherId'});
        User.belongsToMany(models.ActionType, {through: models.UserAction, foreignKey: 'userId'});
      }
    }
  });
  return User;
};
