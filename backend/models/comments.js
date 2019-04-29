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
      comment_body: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      show_id: DataTypes.INTEGER
    },
    {}
  );
  Comments.associate = function(models) {
    Comments.belongsTo(models.Users, { as: "User", foreignKey: "user_id" });
    Comments.belongsTo(models.Shows, { as: "Show", foreignKey: "show_id" });
  };
  return Comments;
};
