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
class CartRepository @Inject()(dbConfigProvider: DatabaseConfigProvider)(implicit ec: ExecutionContext) {
  // We want the JdbcProfile for this provider
  private val dbConfig = dbConfigProvider.get[JdbcProfile]

  // These imports are important, the first one brings db into scope, which will let you do the actual db operations.
  // The second one brings the Slick DSL into scope, which lets you define the table and other queries.
  import dbConfig._
  import profile.api._

  /**
   * Here we define the table. It will have a name of people
   */

  private class CartTable(tag: Tag) extends Table[Cart](tag, "cart") {

    /** The ID column, which is the primary key, and auto incremented */
    def id = column[Long]("id", O.PrimaryKey, O.AutoInc)
    def * = (id) <> ((Cart.apply _).tupled, Cart.unapply)
    //def * = (id, name) <> ((Category.apply _).tupled, Category.unapply)
  }

  /**
   * The starting point for all queries on the people table.
   */
  private val cart = TableQuery[CartTable]

  /**
   * List all the people in the database.
   */
  def list(): Future[Seq[Cart]] = db.run {
    cart.result
  }
}
