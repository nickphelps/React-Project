import React, { Component } from 'react'
import { Container, Row, Col, Jumbotron, ListGroup, Button } from 'react-bootstrap'
import DashboardHomeTab from '../components/DashboardHomeTab'
import LoginFormContainer from './LoginFormContainer';
import { connect } from 'react-redux'
import DogTab from '../components/DogTab'

class DashboardContainer extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         tabState: 1
      }
    
    }

    handleDashboardHomeTabClick (event) {
        event.preventDefault()
        this.setState({
            tabState: 1
        })
    }

    handleLoginFormContainerClick (event) {
        event.preventDefault()
        this.setState({
            tabState: 2
        })
    }

    HandleGoHomeClick (event) {
        event.preventDefault()
        this.props.handleGoHome(false)
    } 

    handleDogTabClick (event) {
        event.preventDefault()
        this.setState({
            tabState: 3
        })
    }

  render() {
      console.log(this.props.userInfo, 'my Redux Store')
      console.log(this.state)
    return (
        <Container variant='flush'>
        <Row>
        <Col xs={3} style={{border: '1px solid black'}} >
        <ListGroup defaultActiveKey="#link1">
            <ListGroup.Item action href={<DashboardHomeTab />}
                            onClick={(event) => this.handleDashboardHomeTabClick(event)} >
            Home
            </ListGroup.Item>
            <ListGroup.Item action href={<LoginFormContainer />}
                            onClick={(event) => this.handleLoginFormContainerClick(event)} >
            Change User Settings
            </ListGroup.Item>
            <ListGroup.Item action href={<DogTab />}
                            onClick={(event) => this.handleDogTabClick(event)}>
            Dog Pics!
            </ListGroup.Item>
            
    </ListGroup>
        </Col>
        <Col style={{border: '5px solid black'}} >
        <Jumbotron>
            {this.state.tabState === 1 ? <DashboardHomeTab store={this.props.userInfo} /> : null}
            {this.state.tabState === 2 ? <LoginFormContainer /> : null}
            {this.state.tabState === 3 ? <DogTab /> : null}
            <Button variant='primary' onClick={(event) => this.HandleGoHomeClick(event)}>Go Home</Button>
        </Jumbotron>
        </Col>
        </Row>
    </Container>
    )
  }
}

const mapStateToProps = (state) => ({
    //do Something
    userInfo: state.userInfo
})

const mapDispatchToProps = (dispatch) => ({
    //function
    handleGoHome: (handleGoHome) => dispatch({
                                                type: 'GO_HOME',
                                                payload: handleGoHome
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)
