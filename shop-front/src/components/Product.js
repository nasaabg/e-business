import React from 'react';
const Product = ({product}) =>
  <div className="col-lg-4 col-md-6 mb-4">
    <div className="card h-100">
      <div className="card-body">
        <h4 className="card-title">
          <a href="#">{product.name}</a>
        </h4>
        <h5>${product.unit_price}</h5>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
          aspernatur!</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
      </div>
    </div>
  </div>

export default Product;