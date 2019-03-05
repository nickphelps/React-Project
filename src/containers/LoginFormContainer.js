import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal, Form, Button, Row, Col, Alert } from 'react-bootstrap'

class LoginForm extends Component {
    constructor(props) {
      super(props)

      this.state = {
          userInfo: [
              {
                  fname: '',
                  fnameVerified: false,
                  lname: '',
                  lnameVerified: false,
                  email: '',
                  emailVerified: false,
                  password: '',
                  passwordVerifired: false,
                  formError: ''
              }
            ]
      }//state

      this.handleSubmit = this.handleSubmit.bind(this)
}
    handleChangeFname (event) {
        this.setState({
            fname: event.target.value
        })
    }

    handleChangeLName (event) {
        this.setState({
            lname: event.target.value
        })

    }

    handleChangeEmail (event) {
        this.setState({
            email: event.target.value
        })
    }

    handleChangePassword (event) {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit (event) {
        //set actions
        event.preventDefault()
        this.props.handleSubmit(this.state)


        //reset form
        document.getElementById('loginForm').reset()
    }
    
  render() {
    return (
      <div>
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>Login Form</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form id="loginForm" onSubmit={(event) => this.handleSubmit(event)}>
                    <Form.Group controlId="fromBasinName">
                        <Row>
                            <Col>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control 
                                             placeholder="First Name" 
                                             onChange={(event) => this.handleChangeFname(event)}/>
                            </Col>
                            <Col>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control 
                                            placeholder="Last Name"
                                            onChange={(event) => this.handleChangeLName(event)} />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" 
                                      placeholder="Enter email"
                                      onChange={(event) => this.handleChangeEmail(event)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" 
                                      placeholder="Password"
                                      onChange={(event) => this.handleChangePassword(event)} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                {/* <Alert variant='danger'>{this.state.userInfo.map((item,index) => {
                                                                        if (item.fname) {
                                                                            return "Please Enter A First Name"
                                                                        } else if (item.lname) {
                                                                            return "Please Enter a Last Name"
                                                                        } else if (item.email) {
                                                                            return 'Please Enter a Email'
                                                                        } else if (item.password) {
                                                                            return 'Please Enter a Password'
                                                                        }
                })}</Alert>  */}
            </Modal.Footer>
        </Modal.Dialog>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    userInfo: state.userInfo
})

const mapDispatchToProps = (dispatch) => ({
    //dispatching actions
    handleSubmit: (handleSubmit) => dispatch ({
                                                type: 'HANDLE_SUBMIT',
                                                payload: handleSubmit
    })

})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)