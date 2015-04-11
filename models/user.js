"use strict";
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        User.belongsTo(models.Publisher, {foreignKey: 'publisherId'});
        User.belongsToMany(model.ActionType, {foreignKey: 'userId', otherKey: 'actionTypeId'});
      }
    }
  });
  return User;
};
