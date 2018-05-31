import React from 'react';

class Category extends React.Component {

  handleClick() {
    const {onSelect, category} = this.props
    onSelect(category)
  }

  render () {
    const {category, selected} = this.props
    let className = 'list-group-item';
    if (selected) {
      className += ' active';
    }
    return(
      <div role='button' className={className} key={category.id} onClick={(e) => this.handleClick(e)}>
        <h4>{category.name}</h4>
      </div>
    )
  }
}
export default Category;