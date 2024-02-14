USE sesac;

show TABLES;

drop Table visitor;

CREATE Table visitor(
    id int PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    comment MEDIUMTEXT
);

DESC visitor;

INSERT INTO visitor(name, comment) VALUES ("hyein",'hi~');
INSERT INTO visitor VALUES (null,"홍길동","홍길동이올시다");

SELECT * FROM visitor;


#############[DCL]################
-- ALTER USER '[MYSQL 아이디]'@'[MYSQL 주소]' IDENTIFIED WITH mysql_native_password BY '[MYSQL 비밀번호]';

-- 방법 1.
CREATE USER "sesac"@"%" IDENTIFIED BY '1234';
ALTER USER "sesac"@"%" IDENTIFIED WITH mysql_native_password BY "1234";
-- 비밀번호 바꾸고 싶다면..

-- 방법 2.
CREATE USER 'sesac'@'%' IDENTIFIED WITH mysql_native_password BY "1234";

GRANT ALL PRIVILEGES ON *.* TO "sesac"@"%" WITH GRANT OPTION;
-- 모든 DB에 접근 가능하도록, sesac 계정에 DB 접근 권한 부여

-- 캐시 삭제
-- 저장된 정보를 가져오기 때문에 현재 사용중인 SQL 캐시를 지우고 새로운 설정 적용
FLUSH PRIVILEGES;

select * FROM mysql.user;