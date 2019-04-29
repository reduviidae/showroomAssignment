"use strict";
module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define(
    "Comments",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      comment_body: {
        type: DataTypes.STRING,
        allowNull: false,
        min: {
          args: [3],
          msg: "Minimum 3 characters required in comment body."
        }
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      show_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {}
  );
  Comments.associate = function(models) {
    Comments.belongsTo(models.Users, { as: "User", foreignKey: "user_id" });
    Comments.belongsTo(models.Shows, { as: "Show", foreignKey: "show_id" });
  };
  return Comments;
};
