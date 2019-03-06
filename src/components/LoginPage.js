import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import LoginForm from '../containers/LoginFormContainer';
import DashboardContainer from '../containers/DashboardContainer'

class LoginPage extends Component {
  // console.log(this.props.user)
  render() {
    return (
      <div>
          <NavBar />
          <LoginForm />
          {this.props.showDashboard ? <DashboardContainer /> : true }
      </div>
    )
  }
}

export default LoginPage

