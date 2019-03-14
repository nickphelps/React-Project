import React, { Component } from 'react'
import { Button, Image, Card } from 'react-bootstrap'
import axios from 'axios'


class DogTab extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         dogImageURL: 'https://images.dog.ceo/breeds/malamute/n02110063_17378.jpg'
      }
    }
    

handleClick(event) {
    event.preventDefault()
    const dogAPIURL = 'https://dog.ceo/api/breeds/image/random'

    axios.get(dogAPIURL)
  .then(function (response) {
    localStorage.setItem('DogData', response.data.message)
  })
  .catch(function (error) {
    console.log(error);
  })
    console.log(localStorage.getItem('DogData'))
      this.setState({
        dogImageURL: localStorage.getItem('DogData')
    })

}
render() {

    return (
      <div>
        <Card stlye={{width: '18rem'}}>
          <Card.Img src={this.state.dogImageURL} fluid  alt='Dog Image'/>
          <Card.Body>
            <div className='text-center'>
              <Button style={{margin: '15px'}} variant="primary" onClick={(event) => this.handleClick(event)}>Next Dog</Button>
            </div>
          </Card.Body>
        </Card>
        <br></br>
      </div> 
    )
  }
}

export default DogTab