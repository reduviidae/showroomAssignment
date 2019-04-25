"use strict";
module.exports = (sequelize, DataTypes) => {
  const Genres = sequelize.define(
    "Genres",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      genre_name: {
        type: DataTypes.STRING,
        unique: true
      }
    },
    {}
  );
  Genres.associate = function(models) {
    // Genres.hasMany(models.shows)
  };
  return Genres;
};
