import React from 'react';

class CartItem extends React.Component {
  handlePlusClick() {
    const {addProduct, item} = this.props
    addProduct(item.product)
  }

  handleMinusClick() {
    const {removeProduct, item} = this.props
    removeProduct(item.product)
  }

  render () {
    const {item} = this.props
    return(
      <div className="container">
        <hr/>
        <div className="row">
          <div className="col-sm-7">{item.product.name}</div>
          <div className="col-sm-2">{item.quantity}</div>
          <div className="col-sm-3">
            <div className="btn-group" role="group" >
              <button onClick={(e) => this.handleMinusClick(e)} className="btn btn-outline-danger btn-sm">–</button>
              <button onClick={(e) => this.handlePlusClick(e)} className="btn btn-outline-success btn-sm">+</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default CartItem;