
CREATE DATABASE test DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_general_ci;
use test;
create table user(
id int not null primary key auto_increment,
    name varchar(10) not null,
    nickname varchar(20) not null
    );

insert into user(`name`, `nickname`) values("hyein", "hyen");


create table board(
	id int not null primary key auto_increment,
    title varchar(20) not null,
    content varchar(100) not null,
    writer varchar(10) not null,
    registered timestamp default now()
    );

show tables;
select * from board;
insert into board(title, content, writer) values("점심시간이당","점심을 먹으러 갑시다. 뭐 먹을까용","hyein");