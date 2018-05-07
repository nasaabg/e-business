package models

import play.api.libs.json._

case class CartItem(id: Long, quantity: Int, product: Int, cart: Int)

object CartItem {
  implicit val cartItemFormat = Json.format[CartItem]
}


