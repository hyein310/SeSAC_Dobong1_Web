CREATE TABLE customer(
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    birthday DATE NOT NULL
);

DESC customer;

INSERT INTO customer VALUES ("aaa", "손흥민", "1992-03-17");
INSERT INTO customer (id, name, birthday) VALUES ('bbb', '황희찬', '1997-11-01');
INSERT INTO customer (id, name, birthday) VALUES ('ccc', '이강인', '2001-05-31');
INSERT INTO customer (id, name, birthday) VALUES ('ddd', '조현우', '2001-05-31');

SELECT * FROM customer;

CREATE TABLE orderlist(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    customer_id VARCHAR(10) NOT NULL,
    product_name VARCHAR(20) NOT NULL,
    quantity INT,
    Foreign Key (customer_id) REFERENCES customer(id),
    ON UPDATE CASCADE ON DELETE CASCADE
);

-- FOREIGN KEY (현재테이블 컬럼이름) REFERENCES 기준테이블 (기준테이블 컬럼이름pk)
-- ON UPDATE CASCADE : 기준 테이블(customer)의 데이터가 변경되면 참조 테이블의 데이터(orderlist)도 변경
-- ON DELETE CASCADE : 기준 테이블의 데이터가 삭제되면 참조 테이블의 데이터도 삭제

-- 테이블을 삭제할 때
--  fk-pk 관계로 연결된 테이블은 외래키가 설정된 테이블(orderlist)를 먼저 삭제

INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('aaa', '맥북m1', 1);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('bbb', '빅파이', 31);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('ccc', '키보드', 3);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('bbb', '초코파이', 5);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('ccc', '귀여운텀블러', 1);

SELECT * FROM orderlist;

-- join
-- 1. inner join
SELECT * FROM customer INNER JOIN orderlist ON customer.id = orderlist.customer_id;


-- 2. ,와 where로 inner join 사용
SELECT orderlist.id, customer.id, customer.name, orderlist.product_name
FROM customer, orderlist -- inner join을 , 로 구분
WHERE customer.id = orderlist.customer_id;

-- 3. inner join, on 사용, where 조건과 함께 사용
SELECT *
FROM orderlist INNER JOIN customer
ON customer.id = orderlist.customer_id
WHERE orderlist.quantity >= 5;

-- 4. table 별칭 지어서 접근 (as 이용)
SELECT o.id as order_id, c.id, c.name, o.product_name
FROM customer as c, orderlist as o
WHERE c.id = o.customer_id;

-- natural JOIN
SELECT * FROM orderlist NATURAL JOIN customer;

-- outer join
SELECT * FROM customer LEFT OUTER JOIN orderlist ON customer.id = orderlist.customer_id; 
SELECT * FROM orderlist RIGHT OUTER JOIN customer ON customer.id = orderlist.customer_id; 

