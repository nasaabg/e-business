# --- !Ups

create table "product_type" (
  "id" integer not null primary key autoincrement,
  "name" VARCHAR not null,
  product int not null,
  foreign key(product) references product(id)
);

# --- !Downs

drop table "product_type"
