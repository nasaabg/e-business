import React from 'react';

class Category extends React.Component {

  handleClick() {
    const {onSelect, category} = this.props
    onSelect(category)
  }

  render () {
    const {category, selected} = this.props
    let className = 'list-group-item list-group-item-action';
    if (selected) {
      className += ' active';
    }
    return(
      <div className={className} key={category.id} onClick={(e) => this.handleClick(e)}>
        <h4>{category.name}</h4>
      </div>
    )
  }
}
export default Category;