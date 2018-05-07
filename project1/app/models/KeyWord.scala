package models

import play.api.libs.json._

case class KeyWord(id: Long, name: String, productKeyWord: Int)

object KeyWord {
  implicit val keyWordFormat = Json.format[KeyWord]
}
