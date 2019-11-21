'use strict';
module.exports = (sequelize, DataTypes) => {
  const ActualUser = sequelize.define('ActualUser', {
    name: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  ActualUser.associate = function(models) {
    // associations can be defined here
  };
  return ActualUser;
};