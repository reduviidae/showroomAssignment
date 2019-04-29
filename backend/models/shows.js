"use strict";

module.exports = (sequelize, DataTypes) => {
  const Shows = sequelize.define(
    "Shows",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: DataTypes.STRING,
      img_url: DataTypes.STRING,
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      genre_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {}
  );
  Shows.associate = function(models) {
    Shows.belongsTo(models.Users, { as: "User", foreignKey: "user_id" });
    Shows.belongsTo(models.Genres, { as: "Genre", foreignKey: "genre_id" });
    Shows.hasMany(models.Comments, { as: "Comments", foreignKey: "show_id" });
  };
  return Shows;
};
