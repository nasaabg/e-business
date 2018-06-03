import React from 'react';

class Product extends React.Component {

  handleClick() {
    const {addProduct, product} = this.props
    addProduct(product)
  }

  render() {
    const {product} = this.props

    return (
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100">
          <a href="#"><img className="card-img-top" src="http://via.placeholder.com/100x70" alt="" /></a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="#">{product.name}</a>
            </h4>
            <h5>${product.unit_price}</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
              aspernatur!</p>
            <a href="#"
               className="btn btn-primary"
               onClick={(e) => this.handleClick(e)}
            >
              Add to cart
            </a>
          </div>
          <div className="card-footer">
            <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
          </div>
        </div>
      </div>
    )
  }
}
export default Product;

