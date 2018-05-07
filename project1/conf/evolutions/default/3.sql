# --- !Ups

create table "cart_item" (
  "id" integer not null primary key autoincrement,
  "quantity"  int not null,
  cart int not null,
  foreign key(cart) references cart(id),
  product int not null,
  foreign key(product) references product(id)
);

# --- !Downs

drop table "cart_item" if exists;
