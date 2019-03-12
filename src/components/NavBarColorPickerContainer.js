import React, { Component } from 'react'
import { SwatchesPicker } from 'react-color'
import { connect } from 'react-redux'
import { Card } from 'react-bootstrap'


class NavBarColorPicker extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         backgroundColor: ''
      }
    }
    handleChangeComplete (color) {
        console.log(color)
        this.setState({ 
            backgroundColor: color.hex 
        });
        console.log(this.state.backgroundColor)
        this.props.handleSubmit(this.state.backgroundColor)
    }
    
  render() {
    return (
      <div>
        <Card>
        <Card.Body>
            <Card.Title>Change NaavBar Color:</Card.Title>
            <SwatchesPicker color={this.state.backgroundColor}
                            onChangeComplete={(color) => this.handleChangeComplete(color)}/>
        </Card.Body>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    userInfo: state.userInfo
  })
  
  const mapDispatchToProps = (dispatch) => ({
    //dispatching actions
    handleSubmit: (NavBarColor) => dispatch ({
                                                type: 'CHANGE_NAVBAR_COLOR',
                                                payload: NavBarColor
    })
  
  })
  
export default connect(mapStateToProps, mapDispatchToProps)(NavBarColorPicker)

