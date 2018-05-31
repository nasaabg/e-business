import React, { Component } from 'react'
import axios from 'axios'
import Product from '../components/Product'

class ProductsContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidMount () {
    axios.get('http://localhost:3001/api/v1/products.json')
      .then(response => {
        console.log(response)
        this.setState({
          products: response.data
        })
      })
      .catch(error => console.log(error))
  }

  render () {
    return (
      <div className="row">
        {this.state.products.map(product => {
          return (<Product product={product} key={product.id}/>)
        })}
      </div>
    )
  }
}

export default ProductsContainer