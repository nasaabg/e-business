# --- !Ups

create table "key_word" (
  "id" integer not null primary key autoincrement,
  "name" VARCHAR not null,
  product_key_word int not null,
  foreign key(product_key_word) references product_key_word(id)
);

create table "product_key_word" (
  "id" integer not null primary key autoincrement,
  "name" VARCHAR not null,
  key_word int not null,
  foreign key(key_word) references key_word(id),
  product int not null,
  foreign key(product) references product(id)
);

ALTER TABLE "product" ADD column product_key_word int not null;

# --- !Downs

drop table "product_type"
