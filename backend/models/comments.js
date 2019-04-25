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
      genre_id: DataTypes.INTEGER
    },
    {}
  );
  Comments.associate = function(models) {
    Comments.belongsTo(models.users);
    Comments.belongsTo(models.shows);
  };
  return Comments;
};
