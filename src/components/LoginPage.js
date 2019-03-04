import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import LoginForm from '../containers/LoginFormContainer';

class LoginPage extends Component {
  render() {
    return (
      <div>
          <NavBar />
          <LoginForm />
      </div>
    )
  }
}

export default LoginPage