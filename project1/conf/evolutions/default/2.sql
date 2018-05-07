# --- !Ups

create table "cart" (
  "id" integer not null primary key autoincrement
);

# --- !Downs

drop table "cart";
