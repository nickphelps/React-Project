import React, { Component } from 'react'
import NavBar from '../components/Navbar'
import LoginForm from '../components/LoginForm';

class LoginPage extends Component {
  render() {
    return (
      <div>
          <NavBar />
          <LoginForm />
        <h1>This is LoginPage</h1>
      </div>
    )
  }
}

export default LoginPage