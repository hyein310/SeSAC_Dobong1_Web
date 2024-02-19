const GameModel = function (Sequelize, DataTypes) {
    const Game = Sequelize.define(
      "Game",
      {
        // 컬럼 정의
        game_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        date: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        location: {
            type: DataTypes.STRING(63),
            allowNull: false,
        },
      },
      {
        freezeTableName: true,
      }
    );
    return Game;
  };
  
  module.exports = GameModel;