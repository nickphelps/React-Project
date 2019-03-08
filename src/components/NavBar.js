import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'


class NavBar extends Component {
  render() {
    return (
      <div>
    <Nav className="justify-content-center">
        <Nav.Item>
            <h1 style={{fontSize: '40px'}} href="/home">React Project</h1>
        </Nav.Item>
    </Nav>
      </div>
    )
  }
}

export default NavBar