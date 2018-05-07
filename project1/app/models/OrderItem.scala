package models

import play.api.libs.json._

case class OrderItem(id: Long)

object OrderItem {
  implicit val orderItemFormat = Json.format[OrderItem]
}
