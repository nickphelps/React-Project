import React, { Component } from 'react';
import '../styles/App.css';
import LoginPage from '../components/LoginPage'
import { connect } from 'react-redux'
import DashboardContainer from '../containers/DashboardContainer';



class App extends Component {
  
  render() {
    
    console.log(this.props.userInfo)
    const propLength = this.props.userInfo.length - 1
    // console.log(this.props.userInfo[propLength].showDashboard)
    
    return (
      <div style={{backgroundColor: this.props.userInfo[propLength].UIState.BackgroundColor , height: '100vh'}} >
        {this.props.userInfo[propLength].showDashboard === false ? <div> <LoginPage store={this.props.userInfo} /> </div> : <DashboardContainer /> }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

  userInfo: state.userInfo,
  
})

const mapDispatchToProps = (dispatch) => ({
  //dispatching actions
  // handleSubmit: (handleSubmit) => dispatch ({
  //                                             type: 'HANDLE_SUBMIT',
  //                                             payload: handleSubmit
  // })

})

export default connect(mapStateToProps,mapDispatchToProps)(App)


