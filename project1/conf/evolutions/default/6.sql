# --- !Ups

create table "review" (
  "id" integer not null primary key autoincrement,
  "description" VARCHAR not null,
  product int not null,
  foreign key(product) references product(id)
);

# --- !Downs

drop table "review"
