"use strict";
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Users",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING,
        unique: true
      }
    },
    {}
  );
  Users.associate = function(models) {
    Users.hasMany(models.shows);
    Users.hasMany(models.comments);
  };
  return Users;
};
