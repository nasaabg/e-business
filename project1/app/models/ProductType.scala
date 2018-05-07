package models

import play.api.libs.json._

case class ProductType(id: Long, name: String, product: Int)

object ProductType {
  implicit val productTypeFormat = Json.format[ProductType]
}
