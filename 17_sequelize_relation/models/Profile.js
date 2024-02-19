const ProfileModel = function (Sequelize, DataTypes) {
    const Profile = Sequelize.define(
      "Profile",
      {
        // 컬럼 정의
        profile_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        position: {
          type: DataTypes.STRING(60),
          allowNull: false,
        },
        salary: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
      },
      {
        freezeTableName: true,
      }
    );
    return Profile;
  };
  
  module.exports = ProfileModel;