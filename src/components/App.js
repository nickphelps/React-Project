import React, { Component } from 'react';
import '../styles/App.css';
import LoginPage from '../components/LoginPage'
import { connect } from 'react-redux'


class App extends Component {
  render() {
    return (
      <div>
        <LoginPage store/>
      </div>
    );
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

export default connect(mapDispatchToProps,mapDispatchToProps)(App)


