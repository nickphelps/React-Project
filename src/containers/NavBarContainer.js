import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'
import { connect } from 'react-redux'



class NavBar extends Component {
  render() {
    // console.log(this.props)
    const propLength = this.props.userInfo.length - 1
    console.log(propLength)
    console.log(this.props.userInfo[propLength].UIState.NavBarColor)

    
    return (
      <div>
    <Nav className="justify-content-center" style={{backgroundColor: this.props.userInfo[propLength].UIState.NavBarColor}}>
        <Nav.Item >
            <h1 style={{fontSize: '40px'}} href="/home">React Project</h1>
        </Nav.Item>
    </Nav>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.userInfo
})

const mapDispatchToProps = (dispatch) => ({
  //dispatching actions
  // handleSubmit: (handleSubmit) => dispatch ({
  //                                             type: 'HANDLE_SUBMIT',
  //                                             payload: handleSubmit
  // })

})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
