package models

import play.api.libs.json._

case class ProductKeyWord(id: Long, product: Int, keyWord: Int)

object ProductKeyWord {
  implicit val productKeyWordFormat = Json.format[ProductKeyWord]
}
