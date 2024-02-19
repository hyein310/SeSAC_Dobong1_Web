const TeamModel = function (Sequelize, DataTypes) {
    const Team = Sequelize.define(
      "Team",
      {
        // 컬럼 정의
        team_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING(63),
          allowNull: false,
        },
      },
      {
        freezeTableName: true,
      }
    );
    return Team;
  };
  
module.exports = TeamModel;