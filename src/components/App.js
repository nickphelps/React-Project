import React, { Component } from 'react';
import '../styles/App.css';
import LoginPage from '../components/LoginPage'
import { connect } from 'react-redux'
import DashboardContainer from '../containers/DashboardContainer';



class App extends Component {
  
  render() {
    
    return (
      <div style={{backgroundColor: this.props.userInfo.UIState.BackgroundColor , height: '100vh'}} >
        {this.props.userInfo.showDashboard === false ? <div> <LoginPage store={this.props.userInfo} /> </div> : <DashboardContainer /> }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

  userInfo: state,
  
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps,mapDispatchToProps)(App)


