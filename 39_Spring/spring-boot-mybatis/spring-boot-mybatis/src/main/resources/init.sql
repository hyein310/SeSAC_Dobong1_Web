
CREATE DATABASE test DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_general_ci;
use test;
create table user(
id int not null primary key auto_increment,
    name varchar(10) not null,
    nickname varchar(20) not null
    );

show tables;

insert into user(`name`, `nickname`) values("hyein", "hyen");