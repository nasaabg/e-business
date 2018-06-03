import React, { Component } from 'react'
import './App.css'
import Main from './containers/Main'
import Login from './containers/Login'
import {getQueryParams} from './utils'

class App extends Component {
  constructor() {
    super();

    const params = getQueryParams();
    this.state = { token: params.token };
  }

  isLoggedIn() {
    return !!this.state.token;
  }

  render () {
    return (
      <div className="App" id="app">
        {this.isLoggedIn()
          ? <Main token={this.state.token} />
          : <Login />
        }
      </div>
    );
  }
}

export default App;
