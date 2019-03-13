import React, { Component } from 'react'
import { SketchPicker } from 'react-color'
import { connect } from 'react-redux'
import { Card } from 'react-bootstrap'

class BackgroundColorPicker extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        backgroundColor: ''
      }
    }
    
    handleChangeComplete(color) {
        console.log(color)
        this.setState({ 
            backgroundColor: color.hex 
        })
        console.log(this.state.backgroundColor)
        this.props.handleSubmit(this.state.backgroundColor)
    }
  render() {
    return (
      <div>
        <Card>
        <Card.Body>
            <Card.Title>Change Background Color:</Card.Title>
            <SketchPicker color={this.state.backgroundColor}
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
    handleSubmit: (NavBackgroundColor) => dispatch ({
                                                type: 'CHANGE_BACKGROUND_COLOR',
                                                payload: NavBackgroundColor
    })
  
  })
  
export default connect(mapStateToProps, mapDispatchToProps)(BackgroundColorPicker)

