import React, { Component } from 'react'
import { Jumbotron, Button } from 'react-bootstrap'
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
        Body as BodyComponent
 } from '../components/StyleContainers'
 import { Icon } from 'react-icons-kit'
 import { dashboard } from 'react-icons-kit/fa/dashboard'
 import { user } from 'react-icons-kit/fa/user'
 import {pictureO} from 'react-icons-kit/fa/pictureO'
 import {optinMonster} from 'react-icons-kit/fa/optinMonster'


const AppContainer = styled(BaseAppContainer)`
    height: 100vh;`

const Navigation = styled(BaseNavigation)`
    background: #FFF;
    color: #8d97ad;
    font-size: 1em;
    letter-spacing: 2px;
    width: 240px;
    line-height: 22px;
  `;

const IconCnt = styled.div`
  color: #1E90FF;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const theme = {
    selectionColor: "#0000FF",
    hoverBgColor: "#D3D3D3"
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
                                    <Icon icon={optinMonster} />
                            </IconCnt>
                            <Text>Dog Pics!</Text>
                        </Nav>
                    </div>
                    <div onClick={(event) => this.handleUITabClick(event)}>
                        <Nav>
                            <IconCnt>
                                    <Icon icon={pictureO} />
                            </IconCnt>
                            <Text>Change UI</Text>
                        </Nav>
                    </div>

                </SideNav>
            </Navigation>
            <BodyComponent>
            <Jumbotron style={{backgroundColor: '#ffffff', position: 'absolute', top: '20%', left: '30%'}}>
            {/* <Jumbotron style={this.state.tabState === 1 ? {backgroundColor: '#ffffff', position: 'absolute', top: '20%', left: '30%'} : 
                              this.setState.tabState === 2 : {backgroundColor: '#ffffff', position: 'absolute', top: '15%', left: '50%'} */}
                {this.state.tabState === 1 ? <DashboardHomeTab store={this.props.userInfo} /> : null}
                {this.state.tabState === 2 ? <LoginFormContainer /> : null}
                {this.state.tabState === 3 ? <DogTab /> : null}
                {this.state.tabState === 4 ? <UIContainer /> : null}
                <div className='text-center'>
                    <Button variant='primary' onClick={(event) => this.HandleGoHomeClick(event)}>Go Home</Button>
                </div>
            </Jumbotron>
            </BodyComponent>
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
