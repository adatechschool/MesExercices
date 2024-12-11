-- database: ./edusign.db

INSERT INTO users (firstname, lastname, email) VALUES ('Ada', 'Lovelace', 'ada@test.fr');
INSERT INTO users (firstname, lastname, email) VALUES ('Beatrice', 'Worsley', 'bea@test.fr');
INSERT INTO users (firstname, lastname, email) VALUES ('Bella', 'Guerin', 'bella@test.fr');
INSERT INTO users (firstname, lastname, email) VALUES ('Barbara', 'Chase', 'barbara@test.fr');

CREATE TABLE edusign (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    created_at DATETIME NOT NULL
);

CREATE TABLE edusign(
   id INTEGER PRIMARY KEY AUTOINCREMENT, 
   created_at DATETIME NOT NULL
);

SELECT * FROM users;

SELECT * FROM users
WHERE firstname = 'Ada';

SELECT * FROM users
WHERE firstname LIKE 'B%';

SELECT COUNT (*) FROM users
WHERE firstname LIKE 'B%';

SELECT firstname FROM users;

INSERT INTO edusign (user_id, created_at) VALUES (1, '2024-05-30 09:30:00');

INSERT INTO edusign (user_id, created_at) VALUES (2, '2024-05-30 09:30:00');

INSERT INTO edusign (user_id, created_at) VALUES (1, '2024-09-01 09:30:00');

INSERT INTO edusign (user_id, created_at) VALUES (2, '2024-09-01 09:30:00');

INSERT INTO edusign (user_id, created_at) VALUES (3, '2024-09-01 09:30:00');

INSERT INTO edusign (user_id, created_at) VALUES (4, '2024-09-01 09:30:00');

SELECT * FROM edusign
ORDER BY created_at ASC, user_id ASC;

SELECT * FROM edusign
WHERE created_at = '2024-05-30 09:30:00';

SELECT created_at, COUNT (*) AS total
FROM edusign
GROUP BY created_at
ORDER BY total ASC;

SELECT COUNT (*) FROM edusign;

SELECT COUNT (*) AS volume
FROM edusign
JOIN users ON edusign.user_id = users.user_id
WHERE users.firstname = 'Bella';

