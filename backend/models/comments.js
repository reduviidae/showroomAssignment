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
        validate: {
          notEmpty: {
            args: true,
            msg: "Comment cannot be empty"
          },
          len: {
            args: [3,500],
            msg: "Commment length is not within range"
          }
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
