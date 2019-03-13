import React, { Component } from 'react'
import { Container, Row, Col, Jumbotron, ListGroup, Button, Nav } from 'react-bootstrap'
import DashboardHomeTab from '../components/DashboardHomeTab'
import LoginFormContainer from './LoginFormContainer';
import { connect } from 'react-redux'
import DogTab from '../components/DogTab'
import UIContainer from './UIContainer'
import NavBar from '../containers/NavBarContainer';

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

    handleUITabClick(event) {
        event.preventDefault()
        this.setState({
            tabState: 4
        })
    }

  render() {
      console.log(this.props.userInfo, 'my Redux Store')
      console.log(this.state)
    return (
        <div>
        <div> <NavBar /> </div>
        <Container variant='flush'>
        <Row>
        <Col xs={3} >
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
            <ListGroup.Item action href={<DogTab />}
                            onClick={(event) => this.handleUITabClick(event)}>
            Change UI
            </ListGroup.Item>
            
    </ListGroup>
        </Col>
        <Col>
        <Jumbotron style={{backgroundColor: '#ffffff'}}>
            {this.state.tabState === 1 ? <DashboardHomeTab store={this.props.userInfo} /> : null}
            {this.state.tabState === 2 ? <LoginFormContainer /> : null}
            {this.state.tabState === 3 ? <DogTab /> : null}
            {this.state.tabState === 4 ? <UIContainer /> : null}
            <Button variant='primary' onClick={(event) => this.HandleGoHomeClick(event)}>Go Home</Button>
        </Jumbotron>
        </Col>
        </Row>
    </Container>
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
    userInfo: state
})

const mapDispatchToProps = (dispatch) => ({
    handleGoHome: (handleGoHome) => dispatch({
                                                type: 'GO_HOME',
                                                payload: handleGoHome
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)
