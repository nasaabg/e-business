import React, { Component } from 'react';
import axios from 'axios';
import Category from '../components/Category';

class CategoriesContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      categories: []
    }
  }
  componentDidMount() {
    axios.get("http://localhost:3001/api/v1/categories.json")
      .then(response => {
        console.log(response)
        this.setState({
          categories: response.data
        })
      })
      .catch(error => console.log(error))
  }

  render() {
    const {selectedCatgoryID} = this.props
    return (
      <div className="list-group">
        {this.state.categories.map(category => {
          return(
            <Category
              category={category}
              key={category.id}
              selected={category.id == selectedCatgoryID}
              onSelect={this.props.onCategorySelect}
            />
          )
        })}
      </div>
    )
  }
}

export default CategoriesContainer