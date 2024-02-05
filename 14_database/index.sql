-- -----------------------database 관련 명령어
-- DATABASE 삭제
drop DATABASE sesac;

drop DATABASE mydatabase;

-- CREATE : DATABASE 생성
CREATE DATABASE sesac DEFAULT CHARACTER set utf8 COLLATE utf8_general_ci;

/*
dobong 이라는 데이터 베이스를 생성하는데,
문자열 셋으로 utf8mb4를, 콜레이션으로 utf8mb4_unicode_ci를 사용!
utf8mb4 는 utf8보다 더 많은 문자 지원(이모지 저장 가능)
>> 이모지를 저장하는 DB라면 utf8mb4
*/
CREATE DATABASE dobong DEFAULT CHARACTER set utf8mb4 COLLATE utf8mb4_unicode_ci;

show DATABASES;

-- 이 데이터 베이스를 사용하겠다! (use 명령어, DB 사용 선언)
USE sesac;

-- ---------------------- table 관련 명령어
-- 1. 테이블 생성
/*
CREATE Table products(
    속성1 값형식 제약조건,
    속성2 값형식 제약조건   
)
*/

--  제약조건
-- NOT NULL : NULL 허용 X
-- AUTO_INCREMENT : 자동 숫자 증가
-- PRIMARY KEY : 기본키(중복 허용 X, NULL 값 허용 X)
-- DEFAULT : 기본값
-- UNIQUE : 중복 허용 X, NULL 값 허용
CREATE Table products(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    model_number VARCHAR(15) NOT NULL,
    series VARCHAR(30) NOT NULL
);

-- 테이블 목록 확인
show TABLES;

-- products 테이블에 어떤 컬럼이 있는지 확인 (테이블 구조 확인)
DESC products;

-- 테이블 삭제
DROP Table products;

-- 테이블 안의 데이터 삭제
TRUNCATE TABLE products;

-- 테이블 변경 (수정)
-- 1. 컬럼 추가
ALTER TABLE products ADD new_column VARCHAR(20);
-- 2. 특정 컬럼 수정
ALTER TABLE products MODIFY new_column INT;
-- 3. 특정 컬럼 삭제
ALTER Table products DROP new_column;


-- --------------------------DML
-- Data Manipulation language (데이터 조작어)
-- user TABLE(id: int not null AUTO_INCREMENT PRIMARY KEY, name: VARCHAR(10) NOT NULL, age: int not null, address: VARCHAR(100))

show TABLES;
DESC userDB;

CREATE Table userDB( 
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    age INT NOT NULL,
    address VARCHAR(100)
    );


-- CREATE (데이터 추가) >> INSERT INTO
-- INSERT INTO 테이블이름 (컬럼1, 컬럼2, ...) VALUES (값1, 값2, ...);

INSERT INTO userdb (name, age, address) VALUES('강혜인', 25, '서울특별시 도봉구');
INSERT INTO userdb (name, age, address) VALUES('정수연', 24, '충청북도 청주시');
INSERT INTO userdb (name, age, address) VALUES('박지선', 30, '강원도 삼척시');
INSERT INTO userdb (name, age, address) VALUES('윤정현', 29, '경기도 의정부시');
INSERT INTO userdb (name, age, address) VALUES('김은수', 18, '부산광역시 동구');
INSERT INTO userdb (name, age, address) VALUES('김애림', 33, '서울특별시 노원구');
INSERT INTO userdb (name, age, address) VALUES('양민주', 22, '서울특별시 마포구');
INSERT INTO userdb (name, age, address) VALUES('윤지우', 27, '경기도 광명시');
INSERT INTO userdb (name, age, address) VALUES('한유경', 25, '서울특별시 강북구');
INSERT INTO userdb (name, age, address) VALUES('진세진', 10, '강원도 평창시 봉평읍');

-- 2. 데이터 수정
-- UPDATE 테이블이름 SET 데이터 수정을 어떻게 할 건지 WHERE 어떤 데이터를;
UPDATE userdb SET name = "강혜이니" WHERE id = 1;

-- 3. 데이터 삭제
-- DELETE FROM 테이블이름 WHERE 삭제 조건;
DELETE FROM userdb WHERE id=11; -- where 이후 조건 데이터 삭제
DELETE FROM userdb; -- 전체 데이터 삭제

TRUNCATE TABLE userdb;

insert into userdb (name, age, address) VALUES('김민정',20,'서울특별시 마포구');
insert into userdb (name, age, address) VALUES('이한이',30,'서울특별시 강남구');
insert into userdb (name, age, address) VALUES('이지은',22,'대구광역시 동구');
insert into userdb (name, age, address) VALUES('윤세희',25,'부산광역시 관악구');
insert into userdb (name, age, address) VALUES('박수진',19,'서울특별시 노원구');
insert into userdb (name, age, address) VALUES('박찬희',23,'서울특별시 강서구');
insert into userdb (name, age, address) VALUES('이지수',32,'부산광역시 동구');
insert into userdb (name, age, address) VALUES('최솔희',37,'강원도 강릉시');
insert into userdb (name, age, address) VALUES('한소희',26,'충청남도 공주시');
insert into userdb (name, age, address) VALUES('권희수',40,'강원도 속초시');
insert into userdb (name, age, address) VALUES('김민지',22,'서울특별시 중구');

-- 4. 테이블 조회 (READ) select ~ from ~
-- * : 전체
select * from userdb;  -- 전체 컬럼 조회
SELECT name FROM userdb;  -- 이름 컬럼 조회
SELECT name, age from userdb; -- 이름 나이 컬럼 조회

-- where 절로 조건 적용
SELECT * FROM userdb WHERE age >= 25;
SELECT * FROM userdb WHERE id = 3;
SELECT name FROM userdb WHERE id = 3;
SELECT id, age FROM userdb WHERE name = "이지은";


-- ORDER BY : 데이터 정렬
-- desc : 내림차순
-- asc : 오름차순 (default) 1부터 ~~큰수
SELECT * FROM userdb ORDER BY age;
SELECT * FROM userdb WHERE id>6 ORDER BY age;

-- LIKE : 문자열 패턴 조회 (where와 함께 쓰임)
-- 서울로 시작하는 주소 찾기

SELECT * FROM userdb WHERE address LIKE "서울%";

-- 이름의 마지막 글자가 '희'인 사람
SELECT * FROM userdb WHERE name LIKE "%희";
-- 주소에 광역시가 들어가는 사람
SELECT * FROM userdb WHERE address LIKE "%광역시%";

-- 이름에 희가 들어가는 이름 컬럼을 조회, age에 대해 내림차순 정렬
SELECT name FROM userdb WHERE name LIKE "%희%" ORDER BY age DESC;

-- LIMIT : 데이터의 개수 제한
SELECT * FROM userdb LIMIT 3;
SELECT * FROM userdb WHERE address LIKE "서울%" ORDER BY age DESC LIMIT 2;

-- BETWEEN A AND B : A와 B의 사이값 조회 (A,B 포함)
SELECT * FROM userdb WHERE age BETWEEN 25 and 30;
-- IN(리스트) : 리스트의 요소와 일치하면 참
SELECT * FROM userdb WHERE age IN (20,21,22,30);

-- IS NULL / IS NOT NULL
INSERT INTO userdb (name, age) VALUES ('서현승', 28);
SELECT * FROM userdb WHERE address IS NULL;

-- 논리 연산자 : AND, OR, NOT
-- 주소가 null이 아니면서 age가 25보다 큰 전체 속성
SELECT * FROM userdb WHERE age >=25 AND address is NOT NULL;
SELECT * FROM userdb WHERE age >=25 OR address is NOT NULL;

-- 이씨 이면서 나이가 22살인 사람의 이름
SELECT name FROM userdb WHERE name LIKE "이%" AND age = 22;

-- distinct (중복 튜플 제거)
SELECT * FROM userdb;
SELECT DISTINCT age from userdb;


-- 이씨인 사람 지우기 >>> 전체 데이터 조회
DELETE FROM userdb WHERE name LIKE "이%";



-- 실습 DB--------------------
CREATE DATABASE usedobong DEFAULT CHARACTER set utf8mb4 COLLATE utf8mb4_unicode_ci;
show DATABASES;
use usedobong;


-- 실습문제1: DDL
CREATE TABLE member(
    id VARCHAR(20) NOT NULL PRIMARY KEY,
    name VARCHAR(5) NOT NULL,
    age INT,
    gender VARCHAR(2) NOT NULL,
    email VARCHAR(20),
    promotion VARCHAR(2) DEFAULT 'x'
);
DESC member;

-- 실습문제2: DDL
-- id 컬럼 값 형식 변경
ALTER TABLE member MODIFY id VARCHAR(10) NOT NULL;
-- age 컬럼 삭제
ALTER TABLE member DROP age;
-- interest 컬럼 추가
ALTER TABLE member ADD interest VARCHAR(100);

-- 실습문제3: DDL
CREATE TABLE user(
    id VARCHAR(10) NOT NULL PRIMARY KEY,
    pw VARCHAR(20) NOT NULL,
    name VARCHAR(5) NOT NULL,
    gender ENUM('F', 'M','') DEFAULT '',
    birthday DATE NOT NULL,
    age INT(3) NOT NULL DEFAULT 0
);
DESC user;


-- 실습4:DML insert into
SELECT * FROM user;
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('hong1234', '8o4bkg','홍길동', 'M','1990-01-31', 33);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('sexysung', '87awjkdf','성춘향', 'F','1992-03-31', 31);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('power70', 'qxur8sda','변사또', 'M','1970-05-02', 53);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('hanjo', 'jk48fn4','한조', 'M','1984-10-18', 39);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('widowmaker', '38ewifh3','위도우', 'F','1976-06-27', 47);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('dvadva', 'k3f3ah','송하나', 'F','2001-06-03', 22);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('jungkrat', '4ifha7f','정크랫', 'M','1999-11-11', 24);


-- 실습6:DML select from
SELECT * FROM user ORDER BY birthday ASC;
SELECT * FROM user WHERE gender = "M" ORDER BY name DESC;
SELECT id, name FROM user WHERE birthday LIKE "199%";
SELECT * FROM user WHERE birthday LIKE "%06%" ORDER BY birthday asc;
SELECT * FROM user WHERE gender = "M" AND birthday LIKE "197%";
SELECT * FROM user ORDER BY age DESC LIMIT 3;
SELECT * FROM user WHERE age BETWEEN 25 AND 50;
UPDATE user SET pw = "12345678" WHERE id = "hong1234";
DELETE FROM user where id = "jungkrat";