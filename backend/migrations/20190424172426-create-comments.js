"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Comments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      comment_body: {
        type: Sequelize.STRING,
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
        allowNull: false,
        type: Sequelize.INTEGER
      },
      show_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Comments");
  }
};
