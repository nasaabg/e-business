import React, { Component } from 'react'
import './App.css'
import CategoriesContainer from './containers/CategoriesContainer'
import ProductsContainer from './containers/ProductsContainer'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedCategoryID: 1
    }
  }

  onCategorySelect(category) {
    this.setState({
      selectedCategoryID: category.id
    });
  }

  render () {
    const {selectedCategoryID} = this.state

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My shop</h1>
        </header>

        <div className="container">
          <div className="row">

            <div className="col-lg-3">
              <h3>Categories</h3>
              <CategoriesContainer
                selectedCatgoryID={selectedCategoryID}
                onCategorySelect={this.onCategorySelect.bind(this)}
              />
            </div>

            <div className="col-lg-9">
              <ProductsContainer
                selectedCategoryID={selectedCategoryID}
              />
            </div>

          </div>
        </div>
        <footer className="py-5 bg-dark">
          <div className="container">
            <p className="m-0 text-center text-white">Copyright &copy; Janek Kurzydlo 2018</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
