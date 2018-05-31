# --- !Ups

ALTER TABLE "cart" ADD column customer int not null;

# --- !Downs

drop table "product_type"
