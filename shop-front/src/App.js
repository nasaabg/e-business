import React, { Component } from 'react'
import './App.css'
import CategoriesContainer from './containers/CategoriesContainer'
import ProductsContainer from './containers/ProductsContainer'
import Cart from './components/Cart'
import _ from 'lodash'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedCategoryID: 1,
      cartItems: []
    }
  }

  onCategorySelect(category) {
    this.setState({
      selectedCategoryID: category.id
    });
  }

  updateCartItems(cartItems, item) {
    if (_.find(cartItems, (e) => (e.id === item.id))) {
      return _.map(cartItems, (e) => {
        if (e.id === item.id) {
          e.quantity += 1
        }
        return e
      })
    }
    return [...cartItems, item]
  }

  onProductAdd(product) {
    const {cartItems} = this.state
    const newItem = {
      id: product.id,
      product: product,
      quantity: 1
    }

    const allItems = this.updateCartItems(cartItems, newItem)
    this.setState({
      cartItems: allItems
    });
  }

  onProductRemove(product) {
    const {cartItems} = this.state
    const allItems = _.reject(cartItems, (e) => {
      if (e.id === product.id) {
        e.quantity -= 1
      }
      return e.quantity < 1
    })

    this.setState({
      cartItems: allItems
    });
  }

  onCartClear() {
    this.setState({
      cartItems: []
    });
  }

  render () {
    const {selectedCategoryID, cartItems} = this.state

    return (
      <div className="App" id="app">
        <header className="App-header">
          <h1 className="App-title">My shop</h1>
        </header>

        <div className="container-fluid">
          <div className="row">

            <div className="col-lg-2">
              <CategoriesContainer
                selectedCategoryID={selectedCategoryID}
                onCategorySelect={this.onCategorySelect.bind(this)}
              />
            </div>

            <div className="col-lg-7">
              <ProductsContainer
                selectedCategoryID={selectedCategoryID}
                onProductAdd={this.onProductAdd.bind(this)}
              />
            </div>
            <div className="col-lg-3">
              <h3>Shopping Cart</h3>
              <Cart
                cartItems={cartItems}
                onCartClear={this.onCartClear.bind(this)}
                onProductAdd={this.onProductAdd.bind(this)}
                onProductRemove={this.onProductRemove.bind(this)}
              />
            </div>

          </div>
        </div>
        <footer class="container-fluid">
          <nav class="navbar fixed-bottom">
            Copyright &copy; Janek Kurzydlo 2018
          </nav>
        </footer>
      </div>
    );
  }
}

export default App;
