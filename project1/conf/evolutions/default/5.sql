# --- !Ups

create table "payment" (
  "id" integer not null primary key autoincrement,
  "amount"  double not null,
  order int not null,
  foreign key(order) references order(id)
);

# --- !Downs

drop table "payment"
