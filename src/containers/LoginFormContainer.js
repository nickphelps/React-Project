import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal, Form, Button, Row, Col } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import DashboardContainer from './DashboardContainer'
// const routes = {
//     path: 
// }

class LoginForm extends Component {
    constructor(props) {
      super(props)

      this.state = {
          userInfo: [
              {
                  fname: '',
                  lname: '',
                  email: '',
                  password: ''
              }
          ]
      }
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
        console.log('enterd submit')
        event.preventDefault()
        this.props.handleSubmit(this.state)
        document.getElementById('loginForm').reset()
    }
    
  render() {
    return (
    <Router >
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
                    {/* <Button variant="primary" type="submit">Submit */}
                        <Link to='/DashboardContainer' state={this.props.userInfo} component={DashboardContainer} onSubmit={(event) => this.handleSubmit(event)}>SUBMIT</Link>
                    {/* </Button> */}
                </Form>
            </Modal.Body>
        </Modal.Dialog>
      <Route path='/DashboardContainer' component={DashboardContainer} />
      </div>
    </Router>
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