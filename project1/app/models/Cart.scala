package models

import play.api.libs.json._

case class Cart(id: Long)

object Cart {
  implicit val cartFormat = Json.format[Product]
}
