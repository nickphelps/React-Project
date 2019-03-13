import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'
import { connect } from 'react-redux'



class NavBar extends Component {
  render() {
    console.log(this.props)
    const propLength = this.props.userInfo.length - 1
    
    return (
      <div>
    <Nav className="justify-content-center" style={{backgroundColor: this.props.userInfo.UIState.NavBarColor}}>
        <Nav.Item >
            <h1 style={{fontSize: '40px'}} href="/home">React Project</h1>
        </Nav.Item>
    </Nav>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userInfo: state
})

const mapDispatchToProps = (dispatch) => ({


})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
