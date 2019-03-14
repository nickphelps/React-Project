import React, { Component } from 'react'
import { CirclePicker } from 'react-color'
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
      
        this.setState({ 
            backgroundColor: color.hex 
        });
        console.log(this.state.backgroundColor)
        this.props.handleSubmit(color.hex)
    }
    
  render() {
    return (
      <div>
        <Card style={{padding: '5px'}}>
        <Card.Body>
            <Card.Title>Change NavBar Color:</Card.Title>
            <CirclePicker color={this.state.backgroundColor}
                            onChange={(color) => this.handleChangeComplete(color)}/>
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

