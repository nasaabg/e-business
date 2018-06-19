import React from 'react';
import ReactDOM from 'react-dom'
import CartItem from './CartItem';
import axios from 'axios';
import _ from 'lodash';

class Cart extends React.Component {
  handleOrder() {
    const {cartItems, onCartClear, token} = this.props
    axios.post(`http://localhost:3001/api/v1/orders?token=${token}`, {
      order: {
        products: _.map(cartItems, (item) => (
          {
            product_id: item.product.id,
            quantity: item.quantity
          }
        ))
      }
    })
      .then(response => {
        alert("Order completed!")
        onCartClear()
      })
      .catch(error => {
        console.log(error)
      })
  }

  renderCartView() {
    const {cartItems, onProductAdd, onProductRemove} = this.props
    if(cartItems.length === 0) {
      return(
        <p>You don't have any products</p>

      )
    } else {
      return(
        <div>
          <div className="container">
            <div className="row">
              <div className="col-sm-4">Name</div>
              <div className="col-sm-8">Qty</div>
            </div>
          </div>
        {
          cartItems.map(item => {
            return (
              <CartItem
                item={item}
                addProduct={onProductAdd}
                removeProduct={onProductRemove}
                key={item.id}
              />
            )
          })
        }
        <hr/>
        <button onClick={(e) => this.handleOrder(e)} class="btn btn-primary btn-sm btn-block">Order</button>
        </div>
      )
    }
  }

  render () {
    return(
      <div className="card">
        <div className="card-body">
          {this.renderCartView()}
        </div>
      </div>
    )
  }
}
export default Cart;