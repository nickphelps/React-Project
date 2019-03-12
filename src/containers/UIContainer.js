import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { CardGroup, Card } from 'react-bootstrap'
import NavBarColorPicker from './NavBarColorPickerContainer';
import BackgroundColorPicker from './BackgroundColorPicker'

class UIContainer extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
    return (
      <div>
        <CardGroup>
                <NavBarColorPicker />
                <BackgroundColorPicker />
        </CardGroup>
      </div>
    )
  }
}

export default UIContainer

// const mapStateToProps = (state) => ({
//     // userInfo: state.userInfo
// })

// const mapDispatchToProps = (dispatch) => ({
//     //dispatching actions
//     // handleSubmit: (handleSubmit) => dispatch ({
//     //                                             type: 'HANDLE_SUBMIT',
//     //                                             payload: handleSubmit
//     // })

// })
