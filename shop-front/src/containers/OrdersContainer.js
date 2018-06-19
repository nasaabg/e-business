import React from 'react';
import axios from 'axios';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';

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
      <div className="row my-orders" style={{padding: 100, display: "inline"}}>
        <h1>My Orders</h1>
        <ul style={{"list-style": "none"}}>
          {
            this.state.orders.map((order) =>
              <li
                key={order.id}
              >
                <p>Order ID: {order.id} Products:</p>
                <ul style={{"list-style": "none"}}>
                  {
                    order.products.map((product) =>
                    <li>{product.name}</li>)
                  }
                </ul>
              <hr />
              </li>
            )
          }
        </ul>
      </div>
    )
  }
}
export default OrdersContainer;