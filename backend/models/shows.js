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
      user_id: DataTypes.INTEGER,
      genre_id: DataTypes.INTEGER
    },
    {}
  );
  Shows.associate = function(models) {
    Shows.belongsTo(models.users);
    Shows.belongsTo(models.genres);
    Shows.hasMany(models.comments);
  };
  return Shows;
};
