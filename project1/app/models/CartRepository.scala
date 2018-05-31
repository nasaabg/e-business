package models

import javax.inject.{ Inject, Singleton }
import play.api.db.slick.DatabaseConfigProvider
import slick.jdbc.JdbcProfile
import scala.concurrent.{ Future, ExecutionContext }

@Singleton
class CartRepository @Inject()(dbConfigProvider: DatabaseConfigProvider)(implicit ec: ExecutionContext) {
  val dbConfig = dbConfigProvider.get[JdbcProfile]
  import dbConfig._
  import profile.api._


  class CartTable(tag: Tag) extends Table[Cart](tag, "cart") {

    def id = column[Long]("id", O.PrimaryKey, O.AutoInc)
    def customer = column[Long]("customer")
    def * = (id, customer) <> ((Cart.apply _).tupled, Cart.unapply)
  }

  val cart = TableQuery[CartTable]

  def create(user: Long): Future[Cart] = db.run {
    (cart.map(p => (p.customer))
      returning cart.map(_.id)
      into ((user, basket_id) => Cart(basket_id, user))
      ) += (user)
  }

  def list(): Future[Seq[Cart]] = db.run {
    cart.result
  }
}