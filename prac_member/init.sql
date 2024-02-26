USE sesac;

show TABLES;

drop Table user;

CREATE Table user(
    id INT PRIMARY KEY AUTO_INCREMENT,
    pw VARCHAR(255) NOT NULL,
    name VARCHAR(15) NOT NULL,
    userid VARCHAR(15) NOT NULL
);

DESC user;

INSERT INTO visitor VALUES (null,"1234","강혜인","khi");