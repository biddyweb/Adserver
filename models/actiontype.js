"use strict";
module.exports = function(sequelize, DataTypes) {
  var ActionType = sequelize.define("ActionType", {
    title: DataTypes.STRING,
    weight: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        ActionType.belongsTo(models.Publisher, {foreignKey: 'publisherId'});
        ActionType.belongsToMany(models.User, {through: models.UserActions, foreignKey: 'actionTypeId'});
      }
    }
  });
  return ActionType;
};
