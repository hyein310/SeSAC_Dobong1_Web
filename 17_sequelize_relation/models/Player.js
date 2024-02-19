const PlayerModel = function (Sequelize, DataTypes) {
    const Player = Sequelize.define(
      "Player",
      {
        // 컬럼 정의
        player_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING(60),
          allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        // team_id: {
        //     type: DataTypes.STRING(20),
        //     allowNull: false,
        // },
      },
      {
        // tableName: "Player", 안써도 상관없음
        freezeTableName: true,
      }
    );
    return Player;
  };
  
  module.exports = PlayerModel;