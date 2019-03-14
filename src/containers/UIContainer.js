import React, { Component } from 'react'
import { CardGroup } from 'react-bootstrap'
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
        <br></br>
      </div>
    )
  }
}

export default UIContainer

