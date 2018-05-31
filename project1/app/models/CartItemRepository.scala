package models

import javax.inject.{Inject, Singleton}
import play.api.db.slick.DatabaseConfigProvider
import slick.jdbc.JdbcProfile

import scala.concurrent.{ExecutionContext, Future}

/**
  * A repository for people.
  *
  * @param dbConfigProvider The Play db config provider. Play will inject this for you.
  */
@Singleton
class CartItemRepository @Inject()(dbConfigProvider: DatabaseConfigProvider, cartRepository: CartRepository, productRepository: ProductRepository)(implicit ec: ExecutionContext) {
  val dbConfig = dbConfigProvider.get[JdbcProfile]
  import dbConfig._
  import profile.api._

  import cartRepository.CartTable

  private val cart_id = TableQuery[CartTable]

  import productRepository.ProductTable

  private val product_id = TableQuery[ProductTable]

  private class CartItemTable(tag: Tag) extends Table[CartItem](tag, "basket_content") {

    def id = column[Long]("id", O.PrimaryKey)
    def quantity = column[Int]("quantity")
    def product = column[Long]("product")
    def cart_foreign_key = foreignKey("cart_foreign_key", id, cart_id)(_.id)
    def product_foreign_key = foreignKey("product_foreign_key", product, product_id)(_.id)
    def * = (quantity, id, product) <> ((CartItem.apply _).tupled, CartItem.unapply)
  }

  private val cartItem = TableQuery[CartItemTable]


  def create(cart: Long, product: Long, amount: Int): Future[Int] =
    db.run(cartItem += CartItem(amount, cart, product))

  def list(): Future[Seq[CartItem]] = db.run {
    cartItem.result
  }
}