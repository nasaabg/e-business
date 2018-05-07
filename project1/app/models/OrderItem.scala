package models

import play.api.libs.json._

case class OrderItem(id: Long, quantity: Int, product: Int, amount: Double)

object OrderItem {
  implicit val orderItemFormat = Json.format[OrderItem]
}
