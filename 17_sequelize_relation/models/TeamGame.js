const TeamGameModel = function (Sequelize, DataTypes) {
    const TeamGame = Sequelize.define(
      "TeamGame",
      {
        // 컬럼 정의
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
      },
      {
        freezeTableName: true,
      }
    );
    return TeamGame;
  };
  
  module.exports = TeamGameModel;