"use strict";

const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];
const db = {};

// 1. Sequelize 클래스를 이용해서 sequelize 인스턴스 생성
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// 2. 모델 불러오기, sequelize 인스터스와 Sequelize 모듈을 전달
const PlayerModel = require("./Player")(sequelize, Sequelize);
const ProfileModel = require("./Profile")(sequelize, Sequelize);
const TeamModel = require("./Team")(sequelize, Sequelize);
const GameModel = require("./Game")(sequelize, Sequelize);
const TeamGameModel = require("./TeamGame")(sequelize, Sequelize);

// 3. 모델 간 관계 설정
// hasOne, hasMany, belongsTo, belongsMany
  // 3-1. 1:1 관계 설정, Player:Profile = 1:1
  // Player의 pk가 Profile의 fk가 된다.
  // Profile은 Player에 속해있다. (belongs to)
PlayerModel.hasOne(ProfileModel, {
  // 두 모델을 연결하는 외래키 설정
  onUpdate:"CASCADE",
  onDelete:"CASCADE",
  foreignKey: "player_id",
});
ProfileModel.belongsTo(PlayerModel, {
  onUpdate:"CASCADE",
  onDelete:"CASCADE",
  foreignKey: "player_id",
});

  // 3-2. Team:Player = 1:N
  // 한 팀에 여러 플레이어가 "속해있음"
TeamModel.hasMany(PlayerModel, {
  // 외래키를 사용하면 자동으로 pk 사용
  sourceKey: "team_id", // 이걸 참고해서
  foreignKey: "teamid",  // 이걸로 이름지어서 만들어주세요
});
PlayerModel.belongsTo(TeamModel, {
  target: "team_id",
  foreignKey: "teamid",
});

  // 3-3. Game:Team = N:N
  // 하나의 팀은 여러 경기를 할 수 있고, 하나의 경기에는 여러팀(2팀)이 참여
TeamModel.belongsToMany(GameModel, {
  through:TeamGameModel, // 중간 테이블 생성
  foreignKey: "team_id",
});
GameModel.belongsToMany(TeamModel, {
  through: TeamGameModel,
  foreignKey: "game_id",
});

// 4. db객체에 모델 추가!
db.sequelize = sequelize; //db = {sequelize:sequelize}
db.Sequelize = Sequelize; //db = {sequelize:sequelize, Sequelize:Sequelize}
db.Player = PlayerModel;
db.Profile = ProfileModel;
db.Team = TeamModel;
db.Game = GameModel;
db.TeamGame = TeamGameModel;

module.exports = db;
