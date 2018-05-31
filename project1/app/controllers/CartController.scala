package controllers

import javax.inject._
import models._
import play.api.data.Form
import play.api.data.Forms._
import play.api.libs.json.Json
import play.api.mvc._

import scala.concurrent.ExecutionContext

class CartController @Inject()(cartRepository: CartRepository,
                                  cc: MessagesControllerComponents
                                 )(implicit ec: ExecutionContext)
  extends MessagesAbstractController(cc) {


  val cartForm: Form[CreateCartForm] = Form {
    mapping(
      "customer" -> longNumber
    )(CreateCartForm.apply)(CreateCartForm.unapply)
  }

  def index = Action { implicit request =>
    Ok(views.html.cart(cartForm))
  }


  def addCartId = Action { implicit request =>
    cartForm.bindFromRequest.fold(
      errorForm => {
        BadRequest(views.html.cart(errorForm))
      },
      cart => {
        val cartID = cartRepository.create(cart.customer)
        Redirect(routes.CartController.getCart()).flashing("success" -> "Basket saved!")
      }
    )

  }

  def getCart = Action.async { implicit request =>
    cartRepository.list().map { cart =>
      Ok(Json.toJson(cart))
    }
  }
}

case class CreateCartForm(customer: Long)