import React from 'react';
import axios from 'axios';

class OrdersContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      orders: []
    }
  }

  fetchOrders() {
    const {token} = this.props
    axios.get(`http://localhost:3001/api/v1/orders?token=${token}`)
      .then(response => {
        this.setState({
          orders: response.data,
        })
      })
      .catch(error => console.log(error))
  }

  componentDidMount () {
    this.fetchOrders()
  }

  render () {

    return (
      <div className="row">
        {this.state.orders.map(order => {
          return (<div key={order.id}>{order.id}</div>)
        })}
      </div>
    )
  }
}
export default OrdersContainer;