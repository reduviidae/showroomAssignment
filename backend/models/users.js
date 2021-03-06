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
        unique: true,
        allowNull: false,
        min:{
        args:[5],
        msg:"Minimum 5 characters required in username."
   }
      }
    },
    {}
  );
  Users.associate = function(models) {
    Users.hasMany(models.Shows, { as: "Shows", foreignKey: "user_id" });
    Users.hasMany(models.Comments, { as: "Comments", foreignKey: "user_id" });
  };
  return Users;
};
