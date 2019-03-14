import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'
import { connect } from 'react-redux'



class NavBar extends Component {
  render() {    
    return (
      <div>
    <Nav className="justify-content-center" style={{backgroundColor: this.props.userInfo.UIState.NavBarColor, borderBottom: '5px solid #1E90FF'}}>
        <Nav.Item >
            <h1 style={{fontSize: '40px', color: 'gray'}} href="/home">React Project</h1>
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
