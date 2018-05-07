package models

import play.api.libs.json._

case class Review(id: Long, description: String, product: Int)

object Review {
  implicit val reviewFormat = Json.format[Review]
}
