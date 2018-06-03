import React, { Component } from 'react';
import Header from '../components/Header'
import ShopContainer from './ShopContainer'
import * as utils from '../utils';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: null,
    };
  }

  componentDidMount() {
    this.fetchUserDetails();
  }

  fetchUserDetails() {
    utils.fetchUserDetails({ token: this.props.token })
      .then(info => {
        this.setState({ info })
      });
  }

  render() {
    const {info} = this.state
    return (
      <div>
        <Header
          info={info}
        />
      <ShopContainer />
      <footer class="container-fluid">
      <nav class="navbar fixed-bottom">
      Copyright &copy; Janek Kurzydlo 2018
    </nav>
  </footer>
  </div>
    );
  }
}

export default Main;