create database fruits
use fruits;

create table fruit(
    id integer primary key auto_increment,
    fruit_name varchar(200) not NULL
);

insert into fruit(fruit_name)
value ('apple'), ('banana'), ('peach');