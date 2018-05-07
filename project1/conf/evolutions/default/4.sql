# --- !Ups

create table "order" (
  "id" integer not null primary key autoincrement
);

create table "order_item" (
  "id" integer not null primary key autoincrement,
  "quantity"  int not null,
  "amount"  double not null,
  product int not null,
  foreign key(product) references product(id)
);

# --- !Downs

drop table "order" if exists;
drop table "order_item" if exists;
