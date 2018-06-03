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

  fetchProducts() {
    const {selectedCategoryID} = this.props
    axios.get('http://localhost:3001/api/v1/products.json', {
      params: {
        category_id: selectedCategoryID
      }
    })
      .then(response => {
        this.setState({
          products: response.data,
          currentCategoryID: selectedCategoryID
        })
      })
      .catch(error => console.log(error))
  }

  componentDidMount () {
    this.fetchProducts()
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    const {currentCategoryID} = prevState
    const {selectedCategoryID} = this.props

    if (currentCategoryID !== selectedCategoryID){
      this.fetchProducts()
    }
  }


  render () {
    const {onProductAdd} = this.props

    return (
      <div className="row">
        {this.state.products.map(product => {
          return (<Product addProduct={onProductAdd} product={product} key={product.id}/>)
        })}
      </div>
    )
  }
}

export default ProductsContainer