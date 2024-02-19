const Visitor = function(Sequelize, DataTypes) {
    // Sequelize는 model/index.js 의 sequelize
    // Datatypes 는 model/index.js 의 Sequelize

    // CREATE Table visitor(
    //     id int PRIMARY KEY AUTO_INCREMENT,
    //     name VARCHAR(10) NOT NULL,
    //     comment MEDIUMTEXT
    // );


    // params1 : 모델 이름 설정 (문자열)
    // params2 : 컬럼을 정의, (CREATE TABLE 제약조건)
    // params3 : 모델 옵션

    const model = Sequelize.define("Visitor",{
        id: {
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false,
        },
        name: {
            type:DataTypes.STRING(10),
            allowNull: false,
        },
        comment:{
            type: DataTypes.TEXT("medium"),
        },
    },
    {
        tableName: "visitor",
        timestamps: false,
        freezeTableName: true,
    });
    return model;
}

module.exports = Visitor;
