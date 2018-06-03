import React, { Component } from 'react';
import Button from 'react-toolbox/lib/button/Button';

const authorizeUrl = 'https://github.com/login/oauth/authorize'
const clientId = '458dfe4f78e4ffc598c2'
const scope = 'user'

class LoginButton extends Component {
  render() {
    return (
      <Button
        raised
        accent
        href={`${authorizeUrl}?client_id=${clientId}&scope=${scope}`}
      >
        Login with GitHub
      </Button>
    );
  }
}

export default LoginButton;