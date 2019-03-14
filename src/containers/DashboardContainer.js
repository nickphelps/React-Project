import React, { Component } from 'react'
import { Container, Row, Col, Jumbotron, ListGroup, Button } from 'react-bootstrap'
import DashboardHomeTab from '../components/DashboardHomeTab'
import LoginFormContainer from './LoginFormContainer';
import { connect } from 'react-redux'
import DogTab from '../components/DogTab'
import UIContainer from './UIContainer'
import NavBar from '../containers/NavBarContainer';
import { SideNav, Nav } from 'react-sidenav'
import styled from 'styled-components'
import { 
        AppContainer as BaseAppContainer,
        ExampleNavigation as BaseNavigation,
        Body as Body

 } from '../components/StyleContainers'
 import { Icon } from 'react-icons-kit'
 import { dashboard } from 'react-icons-kit/fa/dashboard'
 import { user } from 'react-icons-kit/fa/user'


const AppContainer = styled(BaseAppContainer)`
    height: 100vh;`

const Navigation = styled(BaseNavigation)`
    background: #303641;
    color: #8d97ad;
    font-size: 1em;
    letter-spacing: 2px;
    width: 240px;
    line-height: 22px;
  `;

const IconCnt = styled.div`
  color: #6a56a5;
  display: flex;
  justify-content: center;
  aligh-items: center;
`;

const theme = {
    selectionColor: "#FFF",
    hoverBgColor: "#181b20"
  }

const Text = styled.div`
  padding-left: 8px;
`;

class DashboardContainer extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         tabState: 1
      }
    }

    handleDashboardHomeTabClick (event) {
        event.preventDefault()
        console.log('enterd home')
        this.setState({
            tabState: 1
        })
        
    }

    handleLoginFormContainerClick (event) {
        event.preventDefault()
        console.log('enterd Login')

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
    <NavBar /> 
        <AppContainer>
            <Navigation>
                <SideNav defaultSelectedPath={<DashboardHomeTab />}
                        theme={theme}
                >
                    <div onClick={(event) => this.handleDashboardHomeTabClick(event)}>
                        <Nav>
                            <IconCnt>
                                <Icon icon={dashboard} />
                            </IconCnt>
                            <Text>Home Tab</Text>
                        </Nav>
                    </div>
                    <div onClick={(event) => this.handleLoginFormContainerClick(event)}> 
                        <Nav>
                            <IconCnt>
                                <Icon icon={user} />
                            </IconCnt>
                            <Text>Change Users</Text>
                        </Nav>
                    </div>
                    <div onClick={(event) => this.handleDogTabClick(event)}>
                        <Nav>
                            <IconCnt>
                                    <Icon icon={user} />
                            </IconCnt>
                            <Text>Dog Pics!</Text>
                        </Nav>
                    </div>
                    <div onClick={(event) => this.handleUITabClick(event)}>
                        <Nav>
                            <IconCnt>
                                    <Icon icon={user} />
                            </IconCnt>
                            <Text>Change UI</Text>
                        </Nav>
                    </div>

                </SideNav>
            </Navigation>
            <Body>
            <Jumbotron style={{backgroundColor: '#ffffff'}}>
                {this.state.tabState === 1 ? <DashboardHomeTab store={this.props.userInfo} /> : null}
                {this.state.tabState === 2 ? <LoginFormContainer /> : null}
                {this.state.tabState === 3 ? <DogTab /> : null}
                {this.state.tabState === 4 ? <UIContainer /> : null}
                <Button variant='primary' onClick={(event) => this.HandleGoHomeClick(event)}>Go Home</Button>
            </Jumbotron>
            </Body>
        </AppContainer>
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
