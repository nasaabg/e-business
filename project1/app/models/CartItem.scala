package models

import play.api.libs.json._

case class CartItem(quantity: Int, product: Long, cart: Long)

object CartItem {
  implicit val cartItemFormat = Json.format[CartItem]
}


