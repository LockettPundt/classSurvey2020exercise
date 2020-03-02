


CREATE TABLE ranking (
    id serial primary key,
    name text,
    value int

);

CREATE TABLE topic (
    id serial primary key,
    name text,
    ranking_id int REFERENCES ranking(id)
);

INSERT INTO topic (name, ranking_id) VALUES ('HTML', 5);
INSERT INTO topic (name, ranking_id) VALUES ('CSS', 5);
INSERT INTO topic (name, ranking_id) VALUES ('JavaScript', 5);
INSERT INTO topic (name, ranking_id) VALUES ('PostgreSQL', 5);
INSERT INTO topic (name, ranking_id) VALUES ('Node', 5);
INSERT INTO topic (name, ranking_id) VALUES ('Express', 5);


INSERT INTO ranking (name, value) VALUES ('Unranked', 0);
INSERT INTO ranking (name, value) VALUES ('Poor', 1);
INSERT INTO ranking (name, value) VALUES ('Okay', 2);
INSERT INTO ranking (name, value) VALUES ('Good', 3);
INSERT INTO ranking (name, value) VALUES ('Great', 4);
INSERT INTO ranking (name, value) VALUES ('Awesome', 5);