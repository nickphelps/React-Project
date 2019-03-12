import React, { Component } from 'react';
import '../styles/App.css';
import LoginPage from '../components/LoginPage'
import { connect } from 'react-redux'
import DashboardContainer from '../containers/DashboardContainer';



class App extends Component {
  
  render() {
    const stateLength = this.props.userInfo.length - 1
    console.log(this.props.userInfo[stateLength].showDashboard)
    return (
      <div style={{backgroundColor: 'red' , height: '100vh'}} >
        {this.props.userInfo[stateLength].showDashboard === false ? <div> <LoginPage store={this.props.userInfo} /> </div> : <DashboardContainer /> }
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


